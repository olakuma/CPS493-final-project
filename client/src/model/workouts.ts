import data from "@/data/workouts.json"

export interface Workout {
    firstName: string
    lastName: string
    userName: string
    time: string
    workout: string
    latitude: string
    longitude: string
    distance: string
    duration: string
    imagesPP?: string // make imagesPP optional
    images: string
}
const workouts = data.workouts.map( x => ({...x}) ) as Workout[]

export function getWorkouts() {
    return workouts;
}
