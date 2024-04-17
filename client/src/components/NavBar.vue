<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

const isActive = ref(false);

</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <RouterLink to="/"></RouterLink>
                    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="28" height="28" />
                </a>

                <a role="button" class="navbar-burger" :class="{ 'is-active' : isActive }" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : isActive }">
                <div class="navbar-start">
                    <!-- <RouterLink to="/about">About</RouterLink> -->
                    
                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                        <RouterLink to="/">Home</RouterLink>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-running"></i>
                        </span>
                        <RouterLink to="/my-activity">My Activity</RouterLink>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-chart-line"></i>
                        </span>
                        <RouterLink to="/statistics">Statistics</RouterLink>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-user-friends"></i>
                        </span>
                        <RouterLink to="/friends-activity">Friends Activity</RouterLink>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-search"></i>
                        </span>
                        <RouterLink to="/people-search">People Search</RouterLink>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Admin
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                <RouterLink to="/users">Users</RouterLink>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <LoginBadge />
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.router-link-active {
    font-weight: bold;
    border-bottom: 2px solid;
}
</style>