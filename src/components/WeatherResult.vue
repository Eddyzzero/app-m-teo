<template>
    <div class="flex flex-col gap-20 justify-center items-center font-Poppins">
        <div
        class="flex flex-col items-center justify-center pt-12"
        v-if="weatherData">
            <h2 class=" text-3xl font-bold">{{ weatherData.name }}</h2>
            <p>{{ weatherData.country }}</p>
            <p class=" text-2xl"> {{ weatherData.current.temp_c }}°C</p>
            <img class="pt-5" :src="weatherData.current.condition.icon" alt="icon méteo">
            <p>{{ weatherData.current.condition.text }} </p>
        </div>
    </div>

    <div
    class=" text-slate-300 pt-40" 
    v-if="!weatherApiResults && !weatherData">
        <p>Pas d'information météo.</p>
    </div>
</template>

<script>
export default {
    props: {
        weatherData: {
            type: Object,
            default: null,
        },
        weatherApiResults: {
            type: Array,
            default: null,
        }
    }
}
</script>