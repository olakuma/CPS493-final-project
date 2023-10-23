<script setup lang="ts">
    import AddWorkoutBadge from '@/components/AddWorkoutBadge.vue';
    import { ref } from 'vue';
    import { getWorkouts, type Workout } from '@/model/workouts';

    const workouts = getWorkouts
    const isActive = ref(false);
</script>

<template>
    <div class="container">
        <div>
            <h1 class="title"> Friends Activity </h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <AddWorkoutBadge />
                    <br>
                    <article class="media box">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Manchester_United_v_Arsenal%2C_2_December_2021_%2822%29.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Olamide Kumapayi</strong> <small>@olakuma</small> <small>10 min ago</small>
                                    <br>
                                    Ran through Campus - { "Latitude: -60.72082, Longitude: 91.51827"}
                                </p>
                                <div class="columns">
                                    <div class="column is-one-quarter has-text-centered">
                                        <div>
                                            <br>
                                            <div class="title is-size-4" style=" margin: 0px;">2.30 mi</div>
                                            <div class="heading">DISTANCE</div>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter has-text-centered">
                                        <br>
                                        <div class="title is-size-4" style="margin: 0px;">1:30</div>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column is-half">
                                        <img src="https://www.outsideonline.com/wp-content/uploads/2022/01/iStock_89170989_SMALL.jpg" style="max-height: 100%;">
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
                    <article class="media box">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Bruno_Fernandes_Portugal%2C_2018.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Bruno Fernades</strong> <small>@brunofern</small> <small>25 min ago</small>
                                    <br>
                                    Biked through New Paltz - { "Latitude: -60.72082, Longitude: 91.51827"}
                                </p>
                                <div class="columns">
                                    <div class="column is-one-quarter has-text-centered">
                                        <div>
                                            <br>
                                            <div class="title is-size-4" style=" margin: 0px;">10.30 mi</div>
                                            <div class="heading">DISTANCE</div>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter has-text-centered">
                                        <br>
                                        <div class="title is-size-4" style="margin: 0px;">3:45</div>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column is-half">
                                        <img src="https://www.rei.com/dam/content_team_080317_61569_mountain_biking_beginners_lg.jpg" style="max-height: 100%;">
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
                    <article class="media box">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Photo_106.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Marcus rashford</strong> <small>@rashyyyy</small> <small>35 min ago</small>
                                    <br>
                                    Went Swimming - { "Latitude: -60.72082, Longitude: 91.51827"}
                                </p>
                                <div class="columns">
                                    <div class="column is-one-quarter has-text-centered">
                                        <div>
                                            <br>
                                            <div class="title is-size-4" style=" margin: 0px;">0.50 mi</div>
                                            <div class="heading">DISTANCE</div>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter has-text-centered">
                                        <br>
                                        <div class="title is-size-4" style="margin: 0px;">0:45</div>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column is-half">
                                        <img src="https://baltimorediary.typepad.com/.a/6a00d8341d75c753ef0120a611ca3c970c-pi" style="max-height: 100%;">
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
                    <article class="media box">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Christiano Ronaldo</strong> <small>@cr7</small> <small>50 min ago</small>
                                    <br>
                                    Went Swimming - { "Latitude: -60.72082, Longitude: 91.51827"}
                                </p>
                                <div class="columns">
                                    <div class="column is-one-quarter has-text-centered">
                                        <div>
                                            <br>
                                            <div class="title is-size-4" style=" margin: 0px;">1.50 mi</div>
                                            <div class="heading">DISTANCE</div>
                                        </div>
                                    </div>
                                    <div class="column is-one-quarter has-text-centered">
                                        <br>
                                        <div class="title is-size-4" style="margin: 0px;">1:15</div>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column is-half">
                                        <img src="https://baltimorediary.typepad.com/.a/6a00d8341d75c753ef0120a611ca3c970c-pi" style="max-height: 100%;">
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
