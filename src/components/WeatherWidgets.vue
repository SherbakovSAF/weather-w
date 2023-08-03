<template>
  <div class="widgets__wrap">
    <weather-window-preloader 
      v-if="isPreloader && !isSettings" />
  <div v-else>
    <add-new-city v-if="!addedСities.length" @updateCities="updateCitiesData"/>
    <div v-else>
      <toggle-settings 
        :isSettings="isSettings" 
        @click="isSettings = !isSettings" />
      <div v-if="!isSettings">
        <weather-window v-for="city in addedСities" :key="city.city" 
          :city="city" />
      </div>
      <settings-window v-else 
        :citiesList="addedСities"
        :isPreloader="isPreloader" 
        @updateCities="updateCitiesData" />
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Components
import WeatherWindow from '@/components/WeatherWidgetsComponents/WeatherWindow.vue'
import SettingsWindow from '@/components/WeatherWidgetsComponents/SettingsWindow.vue'
import WeatherWindowPreloader from '@/components/WeatherWidgetsComponents/WeatherWindowPreloader.vue'
import ToggleSettings from '@/components/WeatherWidgetsComponents/ToggleSettings.vue'
import AddNewCity from './WeatherWidgetsComponents/AddNewCity.vue'

// API
import getWeather from '@/API/GetWeather'
import apiLocalStorage from '@/API/LocalStorage'

export default defineComponent({
  name: 'WeatherWidgets',
  components: {
    WeatherWindow,
    SettingsWindow,
    WeatherWindowPreloader,
    ToggleSettings,
    AddNewCity
  },
  data() {
    return {
      addedСities: [] as any[],
      isPreloader: false,
      isSettings: false,
    }
  },
  methods: {
    async updateCitiesData() {
      this.isPreloader = true
      const localStorageCities = await apiLocalStorage.getCitiesArray()
      const updatedCitiesData = [];
      for (const city of localStorageCities) {
        try {
          const weather = await getWeather.getCityData(city);
          updatedCitiesData.push(weather);
        } catch (error) {
          console.error(`Ошибка при получении погоды для города ${city}:`, error);
        }
      }

      this.addedСities = updatedCitiesData;
      this.isPreloader = false
    },
    rotateDirection(deg:number):string {
      return `rotate: ${deg}deg`
    },
  },
  async mounted() {
    await this.updateCitiesData()
  }
})
</script>
<style scoped lang="scss">
.widgets__wrap {
  position: relative;
  font-size: 15px;
  width: 270px;
  font-weight: 500;
}
</style>
