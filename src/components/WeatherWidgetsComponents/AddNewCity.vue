<template>
    <div class="new__location__wrap">
      <h2>Add Location:</h2>
      <div class="input__block">
        <input :class="{ 'input__valid': !checkValidate }"
          @keydown.enter="addNewCityLocalStorage"
          v-model.trim="newCity"
          type="text">
        <button @click="addNewCityLocalStorage">
          <img src="@/assets/icons/enter.svg" alt="Ввод">
        </button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// API
import apiLocalStorage from '@/API/LocalStorage'
import getCityData from '@/API/GetWeather'

export default defineComponent({
  name: 'AddNewCity',
  emits: ['updateCities'],
  data() {
    return {
      newCity: '',
    }
  },
  methods: {
    async addNewCityLocalStorage() {
      let correctName
      const res = await getCityData.getCityData(this.newCity)
      if(typeof res == 'boolean'){
        alert('Такого города не существует или ошибка API')
        return
      } else {
        correctName = res.city
      }
      if(!this.checkValidate(correctName)) return
      apiLocalStorage.setNewCity(correctName)
      this.newCity = ''
      this.$emit('updateCities')
    },
    checkValidate(city: string): boolean{
      if(apiLocalStorage.getCitiesArray().indexOf(city) >= 0){
        alert('Такой город уже добавлен')
        return false
      }
      return true
    }
  }
})
</script>
<style scoped lang="scss">
.new__location__wrap {

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

    .input__valid,
    .input__valid:hover {
      border: 1px solid rgb(143, 60, 60);

    }

    button {
      margin-left: 10px;
      height: 2em;
      &:disabled {
        opacity: 0.1;
      }
    }
  }
}
</style>