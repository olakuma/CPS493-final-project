<script setup lang="ts">
    import AddWorkoutBadge from '@/components/AddWorkoutBadge.vue';
    import { getSession } from '@/model/session';
    import { getWorkouts, getWorkoutByEmail, deleteWorkout, type Workout } from '@/model/workouts';
    import { onMounted, ref } from 'vue';
    
    const user = getSession().user;

    // const workouts = ref(getWorkouts())
    const workouts = ref<Workout[]>([]);
        onMounted(async () => {
            workouts.value = await getWorkouts();
        });

</script>

<template>
  <div class="container">
        <div>
            <h1 class="title"> My Activity </h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <AddWorkoutBadge />
                    <br>
                    <div v-for="workout in workouts" :key="workout.email">
                        <article class="media box" v-if="workout.email === user?.email">
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <img :src="user.picture">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ user.firstName }} {{ user.lastName }}</strong> <small>@{{ user.userName }}</small> <small>{{ workout.time }}</small>
                                        <br>
                                        {{ workout.workout }} {{ workout.location }}
                                        - { "Latitude: {{ workout.latitude }}, Longitude: {{ workout.longitude }}"}
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
                                <button class="delete" aria-label="close" @click.prevent="deleteWorkout(workout)"></button>
                            </div>
                        </article>
                    </div>
                    <br>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
