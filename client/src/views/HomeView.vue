<script setup lang="ts">
  import { getUsers, type User } from '@/model/users';
  import { ref } from 'vue';

</script>

<template>
  <main class="container">
    <div class="columns">
      <div class="column is-hidden-touch is-one-quarter">
        <div class="box is-small-hidden"></div>
      </div>

      <div class="column">
        <div class="box has-text-success summary">
          <h2 class="title is-size-5 has-text-centered">Today</h2>
          <div class="columns is-multiline">
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">2.0 mi</h3>
              <caption class="caption">
                Distance
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">1:30</h3>
              <caption class="caption">
                Duration
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">2.5 mph</h3>
              <caption class="caption">
                Avg Pace
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">302.4</h3>
              <caption class="caption">
                Calories
              </caption>
            </div>
          </div>
        </div>

        <div class="box has-text-success summary">
          <h2 class="title is-size-5 has-text-centered">This week</h2>
          <div class="columns is-multiline">
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">5.2 mi</h3>
              <caption class="caption">
                Distance
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">3:55</h3>
              <caption class="caption">
                Duration
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">1.9 mph</h3>
              <caption class="caption">
                Avg Pace
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">554.8</h3>
              <caption class="caption">
                Calories
              </caption>
            </div>
          </div>
        </div>

        <div class="box has-text-success summary">
          <h2 class="title is-size-5 has-text-centered">All time</h2>
          <div class="columns is-multiline">
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">15.7 mi</h3>
              <caption class="caption">
                Distance
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">9:58</h3>
              <caption class="caption">
                Duration
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">2.2 mph</h3>
              <caption class="caption">
                Avg Pace
              </caption>
            </div>
            <div class="column is-half has-text-centered">
              <h3 class="value is-size-1 has-text-weight-bold">1,453.7</h3>
              <caption class="caption">
                Calories
              </caption>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-hidden-touch is-one-quarter">
        <div class="box is-small-hidden"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
