import { ref } from "vue";
import data from "../data/users.json";

export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    handle: string,
    password: string,
    role?: "admin" | "user",
    isAdmin: string,
    token?: string,
    picture?: string
}

const users = ref(data.users.map( x => ({ ...x, role: x.id <= 1 ? 'admin' : 'user' }) ) as User[])

export function getUsers() {
    return users;
}

export function getUserByEmail(email: string) : User | undefined {
    return users.value.find( x => x.email === email );
}

export function deleteUser(user: User) {
    const index = users.value.findIndex( x => x.email === user.email );
    if (index !== -1) {
        users.value.splice(index, 1);
    }
}

export function addUser(user: User) {
    users.value.push(user);
}

export function editUser(user: User) {
    const index = users.value.findIndex( x => x.id === user.id );
    if (index !== -1) {
        users.value[index] = user;
    }
}
