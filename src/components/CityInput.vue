<template>
    <div class="flex flex-row gap-5 font-Poppins">
        <input
            class="py-2 px-1 my-2 w-full bg-transparent border-b focus:border-cyan-800 focus:outline-none"
            type="text"
            placeholder="Votre texte ici"
            @input="getSearchResults"
            v-model="searchQuery"
        >
    </div>
    <section>
        <ul
            class="bg-slate-300 text-black w-full shadow-sm py-2 px-1 top-[66px]"
            v-if="weatherApiResults"
        >
            <li
                class="py-2 cursor-pointer"
                v-for="weatherApiResult in weatherApiResults"
                :key="weatherApiResult.id"
                @click="selectCity(weatherApiResult)"
            >
                {{ weatherApiResult.name }}, {{ weatherApiResult.region }}, {{ weatherApiResult.country }}
            </li>
        </ul>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const searchQuery = ref("");
const queryTimeOut = ref(null);
const WeatherApi = "8c1f126ac67b47a8b9d141452251901";
const weatherApiResults = ref(null);
const emit = defineEmits(['weatherData', 'weatherApiResults']);

const getSearchResults = () => {
    clearTimeout(queryTimeOut.value);
    queryTimeOut.value = setTimeout(async () => {
        if (searchQuery.value !== "") {
            try {
                const result = await axios.get(
                    `http://api.weatherapi.com/v1/search.json?key=${WeatherApi}&q=${searchQuery.value.toLocaleLowerCase()}&lang=fr`
                );
                weatherApiResults.value = result.data;
            } catch (error) {
                console.error("Erreur lors de la récupération des résultats de recherche:", error);
            }
        } else {
            weatherApiResults.value = null;
        }
    }, 300);
};

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