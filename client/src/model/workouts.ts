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
    distanceText?: string // make distanceText optional
    duration: string
    durationText: string
    imagesPP?: string // make imagesPP optional
    images: string
}

export function getWorkouts(): Workout[] {
    return data.workouts.map((workout: any) => {
        return {
            firstName: workout.firstName,
            lastName: workout.lastName,
            userName: workout.userName,
            time: workout.time,
            workout: workout.workout,
            latitude: workout.latitude,
            longitude: workout.longitude,
            distance: workout.distance,
            distanceText: workout["distance-text"] || undefined,
            duration: workout.duration,
            durationText: workout["duration-text"],
            imagesPP: workout["images-pp"] || undefined,
            images: workout.images
        }
    });
}
