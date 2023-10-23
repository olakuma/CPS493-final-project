<script setup lang="ts">
    import { getSession } from '@/model/session';
    import { getUsers } from '@/model/users';

    const session = getSession(); 
    const users = getUsers()
    const role = session.user?.role

    // const adminUsers = users.filter(user => user.role === "admin");
</script>

<template>
    <div>{{ session.user?.firstName }}</div>
    <div class="container"  v-if="role === 'admin'">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">My Exercise</a></li>
                <li><a href="#">Admin</a></li>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>
        <div>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Add a New User</span>
            </button>
        </div>
        <br>
        <div>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>  </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Emails</th>
                        <th>Handle</th>
                        <th>Is Admin</th>
                        <th>  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
                        <td> <img :src="user.picture" alt="user picture" style="max-height: 50px;"> </td>
                        <td> {{ user.firstName }} </td>
                        <td> {{ user.lastName }} </td>
                        <td> {{ user.email }} </td>
                        <td> {{ user.handle }} </td>
                        <td> {{ user.isAdmin }} </td>
                        <td>
                            <button class="button is-small is-info">
                                <span class="icon">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <span>Edit</span>
                            </button>
                            &#160
                            <button class="button is-small is-danger">
                                <span class="icon">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <span>Delete</span>
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