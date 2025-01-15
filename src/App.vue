<template>
  <div class="flex flex-row items-center gap-5 m-4" >
    <div>
      <Logo />
    </div>
    <div>
      <h1> Cicle Méteo </h1>
    </div>
    </div>
</template>

<script>

//importation du composant header
import Logo from './components/logo.vue';

export default {
  name: "App",
  components: {
    Logo, // Utilise la bonne casse pour le composant
  }
}
</script>