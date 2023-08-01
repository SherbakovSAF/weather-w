<template>
  <div class="main__wrap">
    <div class="title__block">
      <h1>Settings</h1>
    </div>
    <preloader v-if="isPreloader" />
    <div v-else class="cities__wrap">
      <article v-for="city in citiesList" :key="city">
        <div class="content__wrap">
          <icon-hamburg />
          <h1>{{city.city}}</h1>
          <button @click="deleteCityLocalStorage(city.city)"><img src="@/assets/icons/garb.svg" alt="Корзина"></button>
        </div>
      </article>
    </div>
    <div class="new__location__wrap">
      <h2>Add Location:</h2>
      <div class="input__block">
        <input 
          :class="{'input__valid': !isValid}"
          @keydown.enter="addNewCityLocalStorage" 
          v-model.trim="newCity" 
          type="text">
        <button @click="addNewCityLocalStorage"><img src="@/assets/icons/enter.svg" alt="Ввод"></button>
      </div>
      <span v-show="!isValid">Введите корректное значение</span>
    </div>
  </div>
</template>

<script>
import IconHamburg from '@/components/WeatherWidgetsComponents/SettingsWindow/IconHamburg'
import actionsLocalStorage from '@/localStorage/actions.js'
import preloader from '@/components/Preloader.vue'
export default {
  name: 'SettingsWindow',
  props: {
    citiesList: {type: Array, required: true},
    isPreloader: {type: Boolean, required: true},
  },
  emits: ['updateCities'],
  components: {
    IconHamburg,
    preloader
  },

  data(){
    return {
      newCity: '',
      
    }
  },
  computed: {
    isValid() {
      return this.newCity.length < 1 || this.newCity.length > 5
    }
  },
  methods: {
    addNewCityLocalStorage(){
      if(!this.isValid){
        return
      }
      actionsLocalStorage.setNewCity(this.newCity)
      this.newCity = ''
      this.$emit('updateCities')
    },
    deleteCityLocalStorage(cityName){
      actionsLocalStorage.deleteCity(cityName)
      this.$emit('updateCities')
    }
  }
}
</script>
<style scoped lang="scss">
.main__wrap {
  * {
    font-size: 16px;
  }

  img {
    height: 100%;
    width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
}

.title__block {
  h1 {
    font-size: 15px;
    font-weight: 600;
  }
}

.cities__wrap {
  display: grid;
  grid-row-gap: 15px;

  article {
    background-color: rgb(233, 233, 233);

    .content__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em;

      * {
        font-weight: 500;
        margin: 0;
      }

      button {
        height: 1.5em;
      }
    }
  }
}

.new__location__wrap {
  margin-top: 30px;

  h2 {
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em, ;
  }

  .input__block {

    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 100%;
      padding: 0.5em;
      border: 1px solid black;
      outline: none;
      font-size: 15px;
      border-radius: 2px;

      &:hover {
        border-color: rgb(101, 176, 219);
      }
    }

    .input__valid, .input__valid:hover{
      border: 1px solid rgb(143, 60, 60);
    
    }

    button {
      margin-left: 10px;
      height: 2em;
    }
  }
}
</style>