<script setup lang="ts">
import { ref } from 'vue';
import { type User } from '@/model/users'; 
import { addUser, getSession } from '@/model/session';
import { useRouter } from 'vue-router';

const router = useRouter(); 
const user = ref<User>({} as User);

function save() {
        if(user.value.id) {
            console.log('update')
        } else {
            addUser(user.value).then((data) => {
                console.log(data);

                if(data === null || data === undefined){
                    console.log("user is null");
                    return;
                }
                else{
                    router.push('/login');
                }
            })
        }
    }

</script>

<template>
    <div class="box">   
        <div class="form"  @submit.prevent="save()">

            <h1 class="title">Sign Up</h1>
            <h2 class="subtitle">Please enter your credentials</h2>

            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="name" v-model="user.firstName">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="name" v-model="user.lastName">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="user.email">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="user.password">
                </div>
            </div>

            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" type="name" v-model="user.userName">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button class="button is-link" @click="save()">Login</button>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>