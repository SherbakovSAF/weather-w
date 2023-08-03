<template>
    <div class="new__location__wrap">
      <h2>Add Location:</h2>
      <div class="input__block">
        <input :class="{ 'input__valid': !isValid }"
          @keydown.enter="addNewCityLocalStorage"
          v-model.trim="newCity"
          type="text">
        <button @click="addNewCityLocalStorage"
          :disabled="!isValid">
          <img src="@/assets/icons/enter.svg" alt="Ввод">
        </button>
      </div>
      <span v-show="!isValid && newCity.length < 0">Введите корректное значение</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// API
import apiLocalStorage from '@/API/LocalStorage'

export default defineComponent({
  name: 'AddNewCity',
  emits: ['updateCities'],
  data() {
    return {
      newCity: '',
    }
  },
  computed: {
    isValid() {
      return /^[a-zA-Z]{5,}$/.test(this.newCity) 
    },
  },
  methods: {
    addNewCityLocalStorage() {
      if (!this.isValid) {
        return
      }
      apiLocalStorage.setNewCity(this.newCity)
      this.newCity = ''
      this.$emit('updateCities')
    },
  }
})
</script>
<style lang="scss">
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