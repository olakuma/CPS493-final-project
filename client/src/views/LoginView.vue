<script setup lang="ts">
import {ref} from "vue"
import { useLogin1 } from "@/model/session";
import { useRouter } from "vue-router";
import { type User }from "@/model/users"


const router = useRouter();

const email = ref('');
const password = ref('');


const user1 = ref<User | null>(null);

function login() {
    
    useLogin1(email.value, password.value).then((user) => {

        if(user.firstName === null || user === undefined){
            console.log("user is null");
            return;
        } else{
            router.push('/');
        }       
    });
}


</script>

<template>
     <div class="box">

        
        <div class="form">

            <h1 class="title">Login</h1>
            <h2 class="subtitle">Please enter your credentials</h2>
    
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="email">
                </div>
            </div>
    
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
            </div>
    
            <div class="field">
                <div class="control">
                    <button class="button is-link" @click="login">Login</button>
                </div>
            </div>

        </div>

     </div>
 </template>
<style scoped>

</style>