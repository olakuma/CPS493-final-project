<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getSession, useLogin } from '@/model/session';
    import { getUsers, type User } from '@/model/users';

    const isActive = ref(false);
    const session = getSession();
    const { login, logout } = useLogin();

    const doLogin = (email: string, password: string) => {
        login(email, password);
    }

    const doLogout = () => {
        logout();
    }

    // const users = getUsers();
    let users: User[] = [];
    onMounted(async () => {
        users = await getUsers();
    });
</script>

<template>
    <div class="has-text-right" v-if="session.user">
        Welcome {{ session.user.firstName }} {{ session.user.lastName }} <br>
        <small> {{ session.user.email }}
            <a class="button is-small is-light is-warning" @click.prevent="doLogout">
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
                    <a v-for="user in users" class="dropdown-item" @click.prevent="doLogin(user.email, user.password)">
                        {{ user.firstName }} {{ user.lastName }}
                    </a>
                    <hr class="dropdown-divider">
                    <a class="dropdown-item">
                        Other Account
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>