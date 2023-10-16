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
                <a class="navbar-item" href="https://bulma.io">
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
                    <!-- <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink> -->
                    
                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-person-running"></i>
                        </span>
                        <span> My Activity </span>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-chart-line"></i>
                        </span>
                        <span> Statistics </span>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-people-group"></i>
                        </span>
                        <span> Friends Activity </span>
                    </a>

                    <a class="navbar-item">
                        <span class="icon">
                            <i class="fas fa-search"></i>
                        </span>
                        <span> People Search </span>
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Admin
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Users
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