import data from "../data/users.json";

export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    handle: string,
    password: string,
    role: "admin" | "user",
    isAdmin: string,
    token?: string,
    picture: string
}

export function getUsers(): User[] {
    return data.users.map( x => ({ ...x, role: x.id <= 1 ? 'admin' : 'user' }) );
}

export function getUserByEmail(email: string) : User | undefined {
    return getUsers().find( x => x.email === email );
}
