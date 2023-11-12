<script setup lang="ts">
    import { editUser, getUserByEmail, type User } from '@/model/users';
    import { ref, defineProps } from 'vue';

    const props = defineProps<{
        email: string
    }>()

    const isActive = ref(false);
    const user = ref(undefined as User | undefined)

    const toggle = () => {
        isActive.value = !isActive.value;
        user.value = getUserByEmail(props.email)
    }

    const closeToggle = () => {
        isActive.value = false;
    }



    function editExistingUser() {
        if(user.value){
            editUser(user.value)
        }
        closeToggle()
    }
</script>

<template>
    <button class="button is-success is-small" @click="toggle">
        <span class="icon">
            <i class="fas fa-edit"></i>
        </span>
    </button>

    <form @submit.prevent="editExistingUser()" class="modal" :class="{ 'is-active' : isActive }" v-if="user">
        <div class="modal-background" @click.prevent="closeToggle">
        <div class="modal-card" @click.stop >
            <header class="modal-card-head">
                <p class="modal-card-title">Update User Information</p>
                <button class="delete" aria-label="close" @click.prevent="closeToggle"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label" for="firstName">First Name</label>
                    <input class="input" type="text" placeholder="First Name" v-model="user.firstName">
                </div>
                <div class="field">
                    <label class="label" for="lastName">Last Name</label>
                    <input class="input" type="text" placeholder="Last Name" v-model="user.lastName">
                </div>
                <div class="field">
                    <label class="label" for="email">Email</label>
                    <input class="input" type="email" placeholder="Email" v-model="user.email">
                </div>
                <div class="field">
                    <label class="label" for="email">Username</label>
                    <input class="input" type="handle" placeholder="Username" v-model="user.handle">
                </div>
                <div class="field">
                    <label class="label" for="isAdmin">Is Admin</label>
                    <div class="select is-fullwidth">
                    <select name=" " v-model="user.isAdmin">
                        <option>  </option>
                        <option> Yes </option>
                        <option> No </option>
                    </select>
                </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" type="submit"> Save changes </button>
                <button class="button" @click.prevent="closeToggle"> Cancel </button>
            </footer>
        </div>
        </div>
        
    </form>

</template>

<style scoped>

</style>