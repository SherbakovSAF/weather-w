<template>
  <div class="main__wrap">
    <h1 class="main__window__city">{{city.city}}, {{city.country}}</h1>
    <div id="icon__weather">
      <icon-weather :weather="city.weather.main.toLowerCase()"/>
      <h2>{{ city.weather.temp.toFixed() }}°C</h2>
    </div>
    <div class="info__block">Feels like {{city.weather.feelsLike.toFixed()}}°C. {{city.weather.description.charAt(0).toUpperCase() + city.weather.description.slice(1)}}.</div> 
    <div class="info__block wind__block">
      <div class="wind__item">
        <div>
          <img id="direction" :style="calcRotateDirection(city.wind.deg)" src="@/assets/icons/direction.svg" alt="Direction">
        </div>
        <div>{{city.wind.speed}} {{city.wind.directionWind}}</div>
      </div>
      <div class="wind__item">
        <img src="@/assets/icons/compass.svg" alt="Compass">
        <div>{{city.hPa}}hPA</div>
      </div>
    </div>
    <div class="info__block wind__block">
      <div>
        Humidity: {{city.humidity}}%
      </div>
      <div>
        Dew point: {{city.dewPoint}}°C
      </div>
    </div>
    <div class="info__block">Visibility {{city.visibility/1000}}km</div>
  </div>
  <hr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconWeather from './WeatherWindowIconsComp.vue'

export default defineComponent({
  name: 'MainWindowWeatherWidgets',
  components: {
    IconWeather,
  },
  props: {
    city: {
      type: Object,
      required: false
    },
  },
  methods: {
    calcRotateDirection(deg:number):string{
      return `rotate: ${deg}deg`
    }
  }
})
</script>
<style scoped lang="scss">
.main__wrap {
  margin-bottom: 30px;
  img {
    width: 2em;
    height: 2em;
  }
    .main__window__city {
      font-size: inherit;
      font-weight: 600;
    }

  #icon__weather {
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 45px;
      font-weight: 500;
      margin: 0;
    }
  }

  .info__block {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .wind__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .wind__item{
      display: flex;
      align-items: center;
      
      img{
        width: 1em;
        height: 1em;
        margin-right: 5px;
      }

      #direction{
        rotate: -43deg;
      }
    }
  }



}</style>
