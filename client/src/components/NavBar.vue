<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isActive = ref(false);

</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
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
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>

                        <div class="dropdown" :class="{ 'is-active' : isActive }" @click="isActive = !isActive">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Log in</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        Olamide
                                    </a>
                                    <a class="dropdown-item">
                                        Christiano Ronaldo
                                    </a>
                                    <hr class="dropdown-divider">
                                    <a class="dropdown-item">
                                        Other Account
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-item">
                            <div class="button is-light" href="https://twitter.com/intent/tweet?text=Bulma:%20a%20modern%20CSS%20framework%20based%20on%20Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms">
                                <span class="icon">
                                    <i class="fa-brands fa-twitter"></i>
                                </span>
                                <span>Tweet</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped>

</style>