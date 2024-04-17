<script setup lang="ts">
    import AddWorkoutBadge from '@/components/AddWorkoutBadge.vue';
    import { onMounted, ref } from 'vue';
    import { deleteWorkout, getWorkouts, type Workout, searchWorkouts } from '@/model/workouts';
    import { getSession } from '@/model/session';
    import type { User } from '@/model/users';

    // const workouts = ref(getWorkouts())
    const session = getSession();
    const user = getSession().user;
    const role = session.user?.role;
    const workouts = ref<Workout[]>([]);
    const users = ref<User[]>([]);

    onMounted(async () => {
        workouts.value = await getWorkouts();
    });

    const handleDeleteWorkout = async (id: number) => {
        try {
            await deleteWorkout(id);
            // Update the UI by removing the deleted user from the users array
            workouts.value = workouts.value.filter(workout => workout.id !== id);
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
    };

    const handleUpdateFromAddWorkoutBadge = async () => {
        workouts.value = await getWorkouts();
    }

    const isFetching = ref(false);
    const page = ref(1);
    const totalPages = ref(1);

    const data = ref<Workout[]>([]);
    const selected = ref<Workout | null>(null);
    const name = ref("");

    async function getAsyncData(_name: string) {
        if (name.value !== _name) {
            name.value = _name;
            data.value = [];
            page.value = 1;
            totalPages.value = 1;
        }

        // String cleared
        if (!_name.length) {
            data.value = [];
            page.value = 1;
            totalPages.value = 1;
            return;
        }

        // Reached last page
        if (page.value > totalPages.value) {
            return;
        }

        isFetching.value = true;
        try {
            const _data = await searchWorkouts(_name, page.value)

            data.value = [...data.value, ..._data];
            page.value += 1;
            totalPages.value = 1 //_data.total_pages;
        } catch (err) {
            console.error(err);
        } finally {
            isFetching.value = false;
        }
    }

    function getMoreAsyncData() {
        getAsyncData(name.value);
    }

</script>

<template>
    <div class="container">
        <div>
            <h1 class="title"> Friends Activity </h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <AddWorkoutBadge @update-view="handleUpdateFromAddWorkoutBadge"/>
                    <br>
                    <!-- <div class="field has-addons">
                        <div class="control is-expanded">
                            <input class="input is-rounded" type="text" placeholder="Search for User">
                        </div>
                        <div class="control">
                            <a class="button is-info is-rounded">
                                <span class="icon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </a>
                        </div>
                    </div> -->

                    
                    <section>
                        <o-field label="Find a workout">
                            <o-autocomplete
                                :data="data"
                                placeholder="e.g. Run"
                                field="title"
                                :loading="isFetching"
                                check-scroll
                                open-on-focus
                                :debounce="500"
                                @input="getAsyncData"
                                @select="(option: Workout) => (selected = option)"
                                @scroll-end="getMoreAsyncData">
                                <template #default="props">
                                    <div class="media">
                                        <div class="media-left">
                                            <img
                                                width="32"
                                                :src="props.option.images" />
                                        </div>
                                        <div class="media-content">
                                            {{ props.option.title }}
                                            <br />
                                            {{ props.option.workout }}
                                        </div>
                                    </div>
                                </template>
                                <template v-if="page > totalPages" #footer>
                                    <span class="ex-text-grey">
                                        Thats it! Workouts found.
                                    </span>
                                </template>
                            </o-autocomplete>
                        </o-field>
                        <p><b>Selected:</b> {{ selected }}</p>
                    </section>

                    <article class="media box" v-for="workout in workouts">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img :src="workout.imagesPP">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ workout.firstName }} {{ workout.lastName }}</strong> <small>@{{ workout.userName }}</small> <small>{{ workout.time }}</small>
                                    <br>
                                    {{ workout.workout }} {{ workout.location }}
                                    - { "Latitude: {{ workout.latitude }}, Longitude: {{ workout.latitude }}"}
                                </p>
                                <div class="columns">
                                    <div class="column is-one-quarter has-text-centered">
                                        <div>
                                            <br>
                                            <div class="title is-size-4" style=" margin: 0px;">{{ workout.distance }}</div>
                                            <div class="heading">DISTANCE</div>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter has-text-centered">
                                        <br>
                                        <div class="title is-size-4" style="margin: 0px;">{{ workout.duration }}</div>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column is-half">
                                        <img :src="workout.images" style="max-height: 100%;">
                                    </div>
                                </div>
                                
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div class="media-right">
                            <button class="delete" aria-label="close" @click.prevent="handleDeleteWorkout(workout.id)" v-if="role === 'admin'"></button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
