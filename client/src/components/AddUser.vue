<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getUsers, type User } from '@/model/users'
    import { addUser } from '@/model/session';

    const isActive = ref(false);

    const toggle = () => {
        isActive.value = !isActive.value;
    }

    const closeToggle = () => {
        isActive.value = false;
        /* Resets the form once it's been closed */
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        userName.value = "";
        isAdmin.value = "";
    }

    const usersRef = ref(getUsers());
    const emits = defineEmits(['updateView'])
    const users = usersRef.value; // Extract the value from the Ref object

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const userName = ref("");
    const isAdmin = ref("");

    async function addNewUser(firstName: string, lastName: string, email: string, password: string, userName: string, isAdmin: string) {
        const newUser: User = {
            id: (await users).length + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userName: userName,
            isAdmin: isAdmin
        }
        await addUser(newUser);

        // emit
        emits('updateView');
        closeToggle()
    }
</script>

<template>
    <button class="button is-success" @click="toggle">
        <span class="icon">
            <i class="fas fa-plus"></i>
        </span>
        <span>Add a New User</span>

        <form>
            <div class="modal" :class="{ 'is-active' : isActive }" >
                <div class="modal-background" @click.prevent="closeToggle">
                <div class="modal-card" @click.stop>
                    <header class="modal-card-head">
                        <p class="modal-card-title">New User</p>
                        <button class="delete" aria-label="close" @click.prevent="closeToggle"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label" for="firstName">First Name</label>
                            <input class="input" type="text" placeholder="First Name" v-model="firstName">
                        </div>
                        <div class="field">
                            <label class="label" for="lastName">Last Name</label>
                            <input class="input" type="text" placeholder="Last Name" v-model="lastName">
                        </div>
                        <div class="field">
                            <label class="label" for="email">Email</label>
                            <input class="input" type="email" placeholder="Email" v-model="email">
                        </div>
                        <div class="field">
                            <label class="label" for="email">Password</label>
                            <input class="input" type="password" placeholder="Password" v-model="password">
                        </div>
                        <div class="field">
                            <label class="label" for="handle">Handle</label>
                            <input class="input" type="text" placeholder="Handle" v-model="userName">
                        </div>
                        <div class="field">
                            <label class="label" for="isAdmin">Is Admin</label>
                            <div class="select is-fullwidth">
                            <select name=" " v-model="isAdmin">
                                <option>  </option>
                                <option> Yes </option>
                                <option> No </option>
                            </select>
                        </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                    <button class="button is-success" @click.prevent="addNewUser(firstName, lastName, email, password, userName, isAdmin)"> Save changes </button>
                    <button class="button" @click.prevent="closeToggle"> Cancel </button>
                </footer>
                </div>
                </div>
            </div>
        </form>
    </button>
</template>

<style scoped>

</style>
