<script setup lang="ts">
    import { ref } from 'vue';
    
    const isActive = ref(false);

    const toggleModal = () => {
        isActive.value = !isActive.value;
    }

    const closeModal = () => {
        isActive.value = false;
    }
</script>

<template>
    <button class="button is-info is-fullwidth" @click="toggleModal">Add Workout</button>
    <form>
        <div class="modal" :class="{ 'is-active' : isActive }" @click="isActive = !isActive"> 
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-card" @click.stop>
                <header class="modal-card-head">
                    <p class="modal-card-title"> Add a Workout </p>
                    <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label" for="name"> Title </label>
                        <input class="input" type="text">
                    </div>
                    <div class="field">
                        <label class="label" for="date"> Date </label>
                        <div class="control has-icons-right">
                            <input class="input" type="date" placeholder="mm/dd/yy">
                            
                        </div>
                    </div>
                    <div class="field">
                        <label class="label" for="duration"> Duration </label>
                        <input class="input" type="text">
                    </div>
                    <div class="field">
                        <label class="label" for="location"> Location </label>
                        <input class="input" type="text">
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
                    <button class="button is-success"> Save changes </button>
                    <button class="button" @click="closeModal"> Cancel </button>
                </footer>
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>
