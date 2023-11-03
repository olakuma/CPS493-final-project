import data from "@/data/workouts.json"
import { ref } from "vue"

export interface Workout {
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

export function getWorkouts() {
    return workouts;
}

export function getWorkoutByEmail(email: string | undefined): Workout[] {
    return workouts.value.filter((workout: Workout) => workout.email === email);
}

export function deleteWorkout(workout: Workout) {
    const index = workouts.value.findIndex( x => x.email === workout.email );
    if (index !== -1) {
        workouts.value.splice(index, 1);
    }
}

export function addWorkout(workout: Workout) {
    workouts.value.unshift(workout);
}

