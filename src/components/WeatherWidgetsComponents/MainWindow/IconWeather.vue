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
                    sun: require('@/assets/weatherIcons/sun.svg')
               }
          }
     },
     computed: {
          renderIconWeather(){
               switch (this.weather) {
                    case 'sun':
                         return this.iconPath.sun
                    default:
                    return this.iconPath.sun
               }
          }
     }
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
