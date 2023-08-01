<template>
  <div class="widgets__wrap">
    <Preloader v-show="isPreloader"/>
    
    <div v-show="addedСities.length">
      <SettingsButton 
        :isSettings="isSettings"
        @click="isSettings = !isSettings"/>
      <div v-if="!isSettings">
        <main-window-weather-widgets 
          v-for="city in addedСities"
          :key="city.city"
          :city="city"/>
      </div>
      <settings v-else/>
    </div>
  </div>
</template>

<script>
import MainWindowWeatherWidgets from './WeatherWidgetsComponents/MainWindow.vue'
import Settings from './WeatherWidgetsComponents/SettingsWindow.vue'
import Preloader from './PreloaderComponents.vue'
import SettingsButton from './WeatherWidgetsComponents/SettingsButton.vue'

import getWeather from '@/API/getWeather.js'

export default {
  name: 'WeatherWidgets',
  components: {
    MainWindowWeatherWidgets,
    Settings,
    Preloader,
    SettingsButton
  },
  data(){
    return{
      citiesData: ['Hamburg', 'Budapest', 'Guangzhou', 'Cherkasy'],
      addedСities: [],
      isPreloader: false,
      isSettings: true,
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

      this.addedСities = updatedCitiesData;
    },
    rotateDirection(deg){
      return `rotate: ${deg}deg`
    },
  },
  async mounted() {
    this.isPreloader = true
    await this.updateCitiesData()
    this.isPreloader = false
  }
}
</script>
<style scoped lang="scss">
.widgets__wrap{
  position: relative;
  font-size: 15px;
  width: 270px;
  font-weight: 500;
}
</style>
