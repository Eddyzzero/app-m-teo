<template>
    <div class="flex flex-col justify-center">
        <div class="flex flex-row font-Poppins justify-start items-center bg-white-pastel rounded-md my-3 w-96">
            <img class=" size-6 ml-2" src="../assets/icons/SVG/Depth 7, Frame 0.png" alt="icon">
            <input
                class=" p-2 w-full rounded-md bg-white-pastel focus:outline-none text-green-pastel placeholder:text-green-pastel placeholder:text-opacity-50"
                type="text" placeholder="Ville" @input="getSearchResults" v-model="searchQuery">
        </div>
        <section class="relative">
            <ul class=" bg-white-pastel text-green-pastel rounded-xl  shadow-sm py-2 px-1  absolute top-0 left-0 w-full z-10 transition-all"
                v-if="weatherApiResults">
                <li class="p-2 cursor-pointer rounded-xl hover:bg-green-pastel hover:text-white-pastel"
                    v-for="weatherApiResult in weatherApiResults" :key="weatherApiResult.id"
                    @click="selectCity(weatherApiResult)">
                    {{ weatherApiResult.name }}, {{ weatherApiResult.region }}, {{ weatherApiResult.country }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const searchQuery = ref("");
const queryTimeOut = ref(null);
const WeatherApi = "8c1f126ac67b47a8b9d141452251901";
const weatherApiResults = ref(null);
const emit = defineEmits(['weatherData', 'weatherApiResults']);


// fonction pour recuperer les resultats de la recherche
const getSearchResults = () => {
    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        if (searchQuery.value !== "") {
            try {
                const result = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${WeatherApi}&q=${searchQuery.value.toLocaleLowerCase()}&lang=fr`);
                weatherApiResults.value = result.data;
            } catch (error) {
                console.error("Erreur lors de la récupération des résultats de recherche:", error);
            }
        } else {
            weatherApiResults.value = null;
        }
    }, 300);
};

//function pour selectionner une ville et obtenir les donnees meteo
const selectCity = async (city) => {
    try {
        const result = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${WeatherApi}&q=${city.name}&lang=fr`
        );
        const weatherData = {
            ...result.data.location,
            current: result.data.current
        };
        emit('weatherData', weatherData);
        searchQuery.value = city.name; // Mettre à jour l'input avec le nom de la ville sélectionnée
        weatherApiResults.value = null; // Masquer les résultats de recherche
    } catch (error) {
        console.error("Erreur lors de la récupération des données météorologiques:", error);
    }
};
</script>


<!-- cette methode est utilise quand on le fait avec setup 
<script setup>
import { ref } from "vue";
const textInputValue = ref();
</script> -->