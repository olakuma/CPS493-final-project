<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { getSession } from './model/session';

const session = getSession();
</script>

<template>
  <header>
    <NavBar />
  </header>
    <progress class="progress is-small is-primary is-striped" max="100" v-if="session.loading">15%</progress>
    <div class="container">

      <RouterView />
    </div>

</template>

<style scoped>

</style>
