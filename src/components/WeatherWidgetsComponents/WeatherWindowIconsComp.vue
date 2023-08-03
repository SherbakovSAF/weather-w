<template>
     <div class="weather__icon__wrap">
          <img :src="renderIconWeather" alt="WeatherLogo" />
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
     name: 'WeatherWindowIconsComp',
     props: {
          weather: {
               type: String,
               required: false, 
               default: 'clear'
          }
     },
     data(){
          return{
               iconPath: {
                    clear: require('@/assets/weatherIcons/clear.svg'),
                    clouds: require('@/assets/weatherIcons/clouds.svg'),
                    rain: require('@/assets/weatherIcons/rain.svg'),
                    snow: require('@/assets/weatherIcons/snow.svg'),

               } as {[key: string]: string}
          }
     },
     computed: {
          renderIconWeather():string{
               if(this.weather){
                    return this.iconPath[this.weather]
               } else {
                    return this.iconPath.clear
               }
          }
     },
})
</script>
<style scoped lang="scss">
.weather__icon__wrap{
     img{
          margin: 0;
          width: 10em
     }
}
</style>
