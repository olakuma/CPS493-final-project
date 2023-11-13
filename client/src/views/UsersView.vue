<script setup lang="ts">
    import { getSession } from '@/model/session';
    import { getUsers, type User } from '@/model/users';
    import { deleteUser } from '@/model/users';
    import { ref } from 'vue';
    import AddUser from '@/components/AddUser.vue';
    import UpdateUser from '@/components/UpdateUser.vue';

    const session = getSession(); 
    const users = ref(getUsers().value as User[]);
    const role = session.user?.role

    const selectedUser = ref({} as User);

</script>

<template>
    <div class="container"  v-if="role === 'admin'">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">My Exercise</a></li>
                <li><a href="#">Admin</a></li>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>
        <div>
            <AddUser />
        </div>
        <br>
        <div>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>  </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Is Admin</th>
                        <th>  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td> <img :src="user.picture" alt="user picture" style="max-height: 50px;"> </td>
                        <td> {{ user.firstName }} </td>
                        <td> {{ user.lastName }} </td>
                        <td> {{ user.email }} </td>
                        <td> {{ user.handle }} </td>
                        <td> {{ user.isAdmin }} </td>
                        <td>
                            <UpdateUser :email="user.email" />
                            &#160
                            <button class="button is-small is-danger" @click.prevent="deleteUser(user)">
                                <span class="icon">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="container" v-else>
        <div class="notification is-danger">
            <button class="delete"></button>
            <strong>Sorry!</strong> You are not authorized to view this page.
        </div>
    </div>
</template>

<style scoped>

</style>