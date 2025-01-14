import { RouterLink } from 'vue-router';
<template>
  <section
    class="bg-red-700 landscape:bg-[url('/07.gif')] bg-no-repeat bg-center bg-cover w-screen h-screen flex justify-center items-center"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-800 opacity-50"></div>
    <div class="w-10/12 h-5/6 flex flex-col justify-center items-center relative z-10">
      <h1 class="text-3xl text-white font-extrabold mb-8">SCHOOL FIGTHER 2</h1>
      <h3 class="text-slate-200 text-center w-1/2 font-normal mb-8">
        El mejor juego de lucha entre alumnos. Selecciona los alumnos que se darán la ostia
      </h3>
      <select class="selectores" name="personaje" id="personaje">
        <option value="">Elije un escenario</option>
      </select>
      <div class="flex gap-8 w-8/12 justify-center item-center">
        <router-link :to="{ name: 'personajes' }">
          <button class="btn bg-red-600 mt-8 text-white">Volver</button>
        </router-link>
        <router-link :to="{ name: 'combate' }">
          <button class="btn bg-purple-800 mt-8 text-white">Continuar</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.selectores,
.btn {
  @apply px-4 py-1 rounded-md outline-none text-lg text-center;
}
</style>
