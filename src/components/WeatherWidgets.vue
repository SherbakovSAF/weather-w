<template>
  <main-window-weather-widgets />
  <settings/>
</template>

<script>
import MainWindowWeatherWidgets from './WeatherWidgetsComponents/MainWindow.vue'
import Settings from './WeatherWidgetsComponents/SettingsWindow.vue'
import getWeather from '../API/getWeather.js'

export default {
  name: 'WeatherWidgets',
  components: {
    MainWindowWeatherWidgets,
    Settings
  },
  data(){
    return {
      citiesArray: []
    }
  },
  async mounted() {
    let cities = ['Moscow','London']
    cities.forEach(async element => {
      let res = await getWeather.getCityData(element)
      this.citiesArray.push(res)
    });
    }
}
</script>
<style scoped lang="scss">

</style>
