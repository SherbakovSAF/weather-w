<template>
     <div class="weather__icon__wrap">
          <img :src="renderIconWeather" alt="WeatherLogo" />
     </div>
</template>

<script>
export default {
     name: 'IconWeather',
     props: {
          weather: {
               type: String,
               required: false, 
               default: 'sun'
          }
     },
     data(){
          return{
               iconPath: {
                    clear: require('@/assets/weatherIcons/clear.svg'),
                    clouds: require('@/assets/weatherIcons/clouds.svg'),
                    rain: require('@/assets/weatherIcons/rain.svg'),
                    snow: require('@/assets/weatherIcons/snow.svg'),

               }
          }
     },
     computed: {
          renderIconWeather(){
               if(this.weather){
                    return this.iconPath[this.weather]
               } else {
                    return this.iconPath.clear
               }
          }
     },
     // mounted(){
     //      console.log(this.weather)
     // }
}
</script>
<style scoped lang="scss">
.weather__icon__wrap{
     img{
          margin: 0;
          width: 10em
     }
}
</style>
