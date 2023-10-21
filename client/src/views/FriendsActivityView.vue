<script setup lang="ts">
    import AddWorkoutBadge from '@/components/AddWorkoutBadge.vue';
    import { ref } from 'vue';

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
                                <img src="client/public/olamide-pp.jpeg">
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
                                    <div class="column is-half has-text-centered">
                                        <h3 class="value is-size-3 has-text-weight-bold">2.30 mi</h3>
                                        <div class="heading">DISTANCE</div>
                                    </div>
                                    <div class="column is-half has-text-centered">
                                        <h3 class="value is-size-3 has-text-weight-bold">1:30</h3>
                                        <div class="heading">DURATION</div>
                                    </div>
                                    <div class="column">
                                        <img src="client/public/running.jpg" style="max-height: 100%;">
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
