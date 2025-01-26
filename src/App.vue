<template>
  <div class="flex justify-center items-center flex-col h-screen font-Poppins gap-10 bg-main">
    <div class=" size-2/4  rounded-lg shadow-lg p-4">
      <div class=" flex flex-row justify-between mr-10 sm:flex-wrap  ">
        <Headerbar />
        <CityInput @weatherData="handleWeatherData" />
      </div>
      <hr>
      <div class="flex flex-col items-center justify-center">
        <WeatherResult :weatherData="weatherData" />
      </div>
    </div>
    <footer class=" opacity-30">cycle Méteo app 2025</footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import CityInput from './components/CityInput.vue';
import Headerbar from './components/HeaderBar.vue';
import WeatherResult from './components/WeatherResult.vue';

export default {
  name: "App",
  components: {
    Headerbar,
    CityInput,
    WeatherResult,
  },
  setup() {
    const weatherData = ref(null);
    const handleWeatherData = (data) => {
      weatherData.value = data;
    }

    return {
      weatherData,
      handleWeatherData,
    }
  }
}
</script>
