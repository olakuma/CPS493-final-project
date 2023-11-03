<script setup lang="ts">
    import AddWorkoutBadge from '@/components/AddWorkoutBadge.vue';
    import { ref } from 'vue';
    import { deleteWorkout, getWorkouts, type Workout } from '@/model/workouts';
    import { getSession } from '@/model/session';

    const workouts = ref(getWorkouts())
    const session = getSession();
    const user = getSession().user;

    const role = session.user?.role
    
</script>

<template>
    <div class="container">
        <div>
            <h1 class="title"> Friends Activity </h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <AddWorkoutBadge />
                    <br>
                    <article class="media box" v-for="workout in workouts">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img :src="workout.imagesPP">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ workout.firstName }} {{ workout.lastName }}</strong> <small>@ {{ workout.userName }}</small> <small>{{ workout.time }}</small>
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
                            <button class="delete" aria-label="close"></button>
                        </div>
                    </article>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
