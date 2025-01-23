<template>
  <div class=" flex flex-row justify-between items-center mr-10 font-Poppins">
    <Headerbar />
  </div>
  <hr>
  <div>
    <CityInput @weatherData="handleWeatherData"/>
    <WeatherResult :weatherData="weatherData" />
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
    const weatherApiResults = ref(null);

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

