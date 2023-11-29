import { reactive } from "vue";
import { type User, getUserByEmail } from "./users";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import * as myFetch from "./myFetch"

const toast = useToast();

const session = reactive({
    user: null as User | null,
    redirectUrl: null as string | null,
    messages: [] as {
        type: string,
        text: string
    }[],
})

export function api(action: string) {
    return myFetch.api(`${action}`)
}

export function getSession() {
    return session;
}

export function showError(err: any) {
    console.error(err);
    session.messages.push({ type: "error", text: err.message ?? err })
    toast.error(err.message ?? err)
}

export function useLogin() {
    const router = useRouter();
    return {
        async login(email: string, password: string): Promise<User | null> {
            const user = await getUserByEmail(email);
            if(user && user.password == password) {
                session.user = user;

                router.push(session.redirectUrl || "/")
                return user;
            }
            return null;
        },
        logout() {
            session.user = null;
            router.push("/login");
        }
    }
}

export async function login(email: string, password: string): Promise<User | null> {
    const user = await getUserByEmail(email);
    if(user && user.password == password) {
        session.user = user;
        return user;
    }
    return null;
}

export function logout() {
    session.user = null;
}
