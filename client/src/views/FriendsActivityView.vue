<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div>
            <h1 class="title"> Friends Activity </h1>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <button class="button is-info is-fullwidth"> Add Workout </button>
                    <form>
                        <div class="modal"> 
                            <div class="modal-background"></div>
                            <div class="modal-card">
                                <header class="modal-card-head">
                                    <p class="modal-card-title"> Add a Workout </p>
                                    <button class="delete" aria-label="close"></button>
                                </header>
                                <section class="modal-card-body">
                                    <div class="field">
                                        <label class="label" for="name"> Title </label>
                                        <input class="input" type="text">
                                    </div>
                                    <div class="field">
                                        <label class="label" for="date"> Date </label>
                                        <div class="control has-icons-right">
                                            <input class="input" type="text" placeholder="mm/dd/yy">
                                            <span class="icon is-small is-right">
                                                <i class="far fa-calendar"></i>
                                            </span>
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
                                    <button class="button"> Cancel </button>
                                </footer>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>