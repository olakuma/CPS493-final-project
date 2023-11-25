import { ref } from "vue";
import { api } from "./session";

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

export function getUsers(): Promise<User[]> {
    return api("users");
}

export async function getUserByEmail(email: string) : Promise<User | undefined> {
    const users = await getUsers();
    return users.find( x => x.email === email );
}

export async function deleteUser(user: User) {
    const users = await getUsers();
    const index = users.findIndex( x => x.email === user.email );
    if (index !== -1) {
        users.splice(index, 1);
    }
}

export async function addUser(user: User) {
    const users = await getUsers();
    users.push(user);
}

export async function updateUser(user: User) {
    const users = await getUsers()
    const index = users.findIndex( x => x.id === user.id );
    if (index !== -1) {
        users[index] = user;
    }
}
