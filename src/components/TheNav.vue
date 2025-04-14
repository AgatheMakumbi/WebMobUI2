<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { curAnchor, defaultAnchor, routes} from '../stores/routes.js';



function getHashState() {
  let hash = window.location.hash.substring(1);

  //permet de gérer le cas ou on a pas d'ancre dans l'url
  //some = tests whether at least one element in the array passes the test 
    if (!hash || !routes.some(route => route.anchor === hash)) { 
    hash = defaultAnchor;
    window.history.pushState(null, null, '#' + hash);
  }  
  curAnchor.value = hash;
}

onMounted(() => {
    window.addEventListener('popstate', getHashState);
    getHashState();
  });

  onUnmounted(() => {
    window.removeEventListener('popstate', getHashState);
  });
</script>

<template>
  <!--{{curAnchor}}-->
  <ul>
		<li v-for="route in routes">
      <a :href="'#' + route.anchor">{{ route.label }}</a>
		</li>
	</ul>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #777;
}
li {
  display: inline;
  flex: 1;
  text-align: center;
}
a {
  padding: 0.3rem;
  text-decoration: none;
  color: whitesmoke;
  display: block;
}
a:hover {
  color: tomato;
}
</style>
