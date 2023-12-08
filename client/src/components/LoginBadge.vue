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
            <RouterLink to="/signup">Sign Up</RouterLink>
        </a>

        <a class="button is-primary">
            <RouterLink to="/login">Login</RouterLink>
        </a>
    </div>
</template>

<style scoped>

</style>