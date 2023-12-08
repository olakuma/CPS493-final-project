import { ref } from "vue";
import { api } from "./session";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    role?: "admin" | "user",
    isAdmin: string,
    token?: string,
    picture?: string
}

export function getUsers(): Promise<User[]> {
    return api("users");
}

export async function getUserByEmail(email: string) {
    const users = await getUsers();
    return users.find( x => x.email === email );
}

export async function deleteUser(id: number): Promise<User | null> {
    try {
        await api(`users/${id}`, undefined, 'DELETE');
    } catch (error) {
        console.error("Error calling API:", error)
    }
    return null;
}

export async function updateUser(user: User) {
    const users = await getUsers()
    const index = users.findIndex( x => x.id === user.id );
    if (index !== -1) {
        users[index] = user;
    }
}
