<template>
    <div>
        <div v-if="weatherApiResults">
            <h3>Résultats de la recherche:</h3>
            <ul>
                <li v-for="result in weatherApiResults" :key="result.id">
                    {{ result.name }}, {{ result.region }}, {{ result.country }}
                </li>
            </ul>
        </div>
        <div v-if="weatherData">
            <h3>Détails météorologiques:</h3>
            <p><strong>Ville:</strong> {{ weatherData.name }}</p>
            <p><strong>Pays:</strong> {{ weatherData.country }}</p>
            <p><strong>Region:</strong> {{ weatherData.region }}</p>
            <p><strong>Temperature:</strong> {{ weatherData.current.temp_c }}°C</p>
            <p><strong>Temps:</strong> {{ weatherData.current.condition.text }}</p>
            <p><strong>Humidité:</strong> {{ weatherData.current.humidity }}%</p>
            <p><strong>Vitesse de vent :</strong> {{ weatherData.current.wind_kph }} km/h</p>
        </div>
        <div v-if="!weatherApiResults && !weatherData">
            <p>Pas d'information météo.</p>
        </div>
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