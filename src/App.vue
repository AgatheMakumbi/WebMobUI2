  <script setup>
  import { computed, ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import temperature from './pages/temperature.vue';
  import {curAnchor,routes} from './stores/routes';
import Weight from './pages/weight.vue';

</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav></TheNav>
  <!-- on veut montrer seulement la page qui convient à l'url-->
  <temperature v-if="curAnchor==='temp'" />
  <Weight v-if="curAnchor==='weight'" /> 
</template>
<style scoped>

</style>

<style>
 * {
  box-sizing: border-box;
 }
 body {
  margin: 0;
  padding: 0;
  font-family: Consolas, monospace;
 }
</style>
