<template>
  <div class=" flex flex-row justify-between items-center mr-10">
    <Headerbar />
    <CityInput />
  </div>
  <hr>
</template>

<script>
import CityInput from './components/CityInput.vue';
import Headerbar from './components/HeaderBar.vue';

export default {
  name: "App",
  components: {
    Headerbar,
    CityInput,

  }
}
</script>