import data from "@/data/workouts.json"
import { ref } from "vue"
import { api } from "./session";

export interface Workout {
    id: number
    firstName: string
    lastName: string
    userName: string
    email: string
    time: string
    workout: string
    latitude?: string
    longitude?: string
    distance: string
    duration: string
    imagesPP?: string // make imagesPP optional
    images?: string
    location?: string
}
const workouts = ref(data.workouts.map( x => ({...x}) ) as Workout[])

export function getWorkouts(): Promise<Workout[]> {
    return api('workouts');
}

export function getWorkoutByEmail(email: string | undefined): Workout[] {
    return workouts.value.filter((workout: Workout) => workout.email === email);
}

export async function deleteWorkout(id: number) {
    return await api(`workouts/${id}`, undefined, 'DELETE');
}

export function addWorkout(workout: Workout) {
    workouts.value.unshift(workout);
}

