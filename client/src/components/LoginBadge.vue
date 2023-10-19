<script setup lang="ts">
    import { ref } from 'vue';
    import { getSession, login } from '@/model/session';

    const isActive = ref(false);
    const session = getSession();

    function doLogin(){
        login();
    }
</script>

<template>
    <div class="has-text-right" v-if="session.user">
        Welcome {{ session.user.firstName }} {{ session.user.lastName }} <br>
        <small> {{ session.user.email }}
            <a class="button is-small is-light is-warning" @click.prevent="session.user = null">
                <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                </span>
            </a>
        </small>
    </div>
    <div class="buttons" v-else>
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
                    <a class="dropdown-item" @click.prevent="doLogin()">
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
</template>

<style scoped>

</style>