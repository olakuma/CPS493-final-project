<script setup lang="ts">
    import { ref } from 'vue';
    import { type Workout, addWorkout, getWorkouts, getWorkoutByEmail } from '@/model/workouts';
    import { getSession } from '@/model/session';

    const session = getSession();
    const email = session.user?.email || ''

    const workouts = ref(getWorkoutByEmail(email))
    
    const isActive = ref(false);

    const toggleModal = () => {
        isActive.value = !isActive.value;
    }

    const closeModal = () => {
        isActive.value = false;
        /* Resets the form once it's been closed */
        workout.value = "";
        duration.value = "";
        distance.value = "";
        duration.value = "";
        location.value = "";
    }

    const currentUser = email;
    const id = ref(0)
    const fname = ref(session.user?.firstName || '');
    const lname = ref(session.user?.lastName || '');
    const userName = ref(session.user?.userName || '');
    const workout = ref("");
    const duration = ref("");
    const distance = ref("");
    const time = ref("5 secs ago");
    const location = ref("- at ")

    function addNewWorkout(currentUser: string, id: number, fname: string, lname: string, workout: string, duration: string, distance: string, time: string, userName: string, location: string) {
        const newWorkout: Workout = {
            id: workout.length + 1,
            email: currentUser,
            firstName: fname,
            lastName: lname,
            workout: workout,
            duration: duration,
            distance: distance,
            time: time,
            userName: userName,
            location: location,
        }
        addWorkout(newWorkout)
        closeModal()
    }
</script>

<template>
    <button class="button is-info is-fullwidth" @click.prevent="toggleModal">Add Workout</button>
    <form @submit.prevent="addNewWorkout(currentUser, id,fname, lname, workout, duration, distance, time, userName, location)">
        <div class="modal" :class="{ 'is-active' : isActive }" @click="isActive = !isActive"> 
            <div class="modal-background" @click.prevent="closeModal"></div>
            <div class="modal-card" @click.stop>
                <header class="modal-card-head">
                    <p class="modal-card-title"> Add a Workout </p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label" for="name"> Workout </label>
                        <input class="input" type="text" placeholder="Workout" v-model="workout">
                    </div>
                    <div class="field">
                        <label class="label" for="date"> Date </label>
                        <div class="control has-icons-right">
                            <input class="input" type="date" placeholder="mm/dd/yy">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="duration"> Duration </label>
                        <input class="input" type="text" v-model="duration">
                    </div>
                    <div class="field">
                        <label class="label" for="duration"> Distance </label>
                        <input class="input" type="text" v-model="distance">
                    </div>
                    <div class="field">
                        <label class="label" for="location"> Location </label>
                        <input class="input" type="text" v-model="location">
                    </div>
                    <div class="field">
                        <label class="label" for="picture"> Picture </label>
                        <input class="input" type="text">
                    </div>
                    <div class="field">
                        <label class="label" for="type"> Type </label>
                        <div class="select is-fullwidth">
                            <select name=" ">
                                <option>  </option>
                                <option> Run </option>
                                <option> Walk </option>
                                <option> Strength </option>
                                <option> Bike </option>
                                <option> Swim </option>
                                <option> Cardio </option>
                                <option> Other </option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" type="submit"> Add Workout </button>
                    <button class="button" @click.prevent="closeModal"> Cancel </button>
                </footer>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>
