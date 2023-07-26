<template>
  <main-window-weather-widgets />
  <settings/>
</template>

<script>
import MainWindowWeatherWidgets from './WeatherWidgetsComponents/MainWindow.vue'
import Settings from './WeatherWidgetsComponents/SettingsWindow.vue'

export default {
  name: 'WeatherWidgets',
  components: {
    MainWindowWeatherWidgets,
    Settings
  },
  async mounted() {
    const cities = ['London', 'Moscow']
    // Основной код
    const citiesCord = await Promise.all(cities.map(getCityCoordinates));
    const citiesWeather = await Promise.all(citiesCord.map(getCityWeather));

      }
}
</script>
<style scoped lang="scss">

</style>
