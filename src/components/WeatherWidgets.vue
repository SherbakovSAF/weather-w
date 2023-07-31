<template>
  <div v-show="cit.length">
    <main-window-weather-widgets v-for="city in cit" :key="city.city" :city="city"/>
  </div>
  
  <settings/>

</template>

<script>
import MainWindowWeatherWidgets from './WeatherWidgetsComponents/MainWindow.vue'
import Settings from './WeatherWidgetsComponents/SettingsWindow.vue'
import getWeather from '@/API/getWeather.js'

export default {
  name: 'WeatherWidgets',
  components: {
    MainWindowWeatherWidgets,
    Settings
  },
  data(){
    return{
      citiesData: ['Manchester', 'Budapest', 'Guangzhou'],
      cit: []
    }
  },
  methods: {
  async updateCitiesData() {
      const updatedCitiesData = [];
      for (const city of this.citiesData) {
        try {
          const weather = await getWeather.getCityData(city);
          updatedCitiesData.push(weather);
        } catch (error) {
          console.error(`Ошибка при получении погоды для города ${city}:`, error);
        }
      }

      this.cit = updatedCitiesData;
    },
    rotateDirection(deg){
      return `rotate: ${deg}deg`
    },
  },
  mounted() {
    this.updateCitiesData()
  }
}
</script>
<style scoped lang="scss">

</style>
