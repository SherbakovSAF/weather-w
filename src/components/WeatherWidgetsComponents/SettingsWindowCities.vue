<template>
    <draggable class="cities__wrap" 
      handle=".handle"
      @start="dragging = true"
      @end="dragging = false"
      :list="citiesList" 
      :item-key="'hPa'"
    >
    <template #item="{element: citiesList}">
      <article >
        <div class="content__wrap">
          <icon-hamburg class="handle" />
          <h1>{{ citiesList.city }}</h1>
          <button @click="deleteCityLocalStorage(citiesList.city)">
            <img src="@/assets/icons/garb.svg" alt="Корзина">
            </button>
        </div>
      </article>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Components
import IconHamburg from './SettingsWindowHamburgComp.vue'
import draggable from 'vuedraggable'

// API
import localStorage from '@/API/LocalStorage'

export default defineComponent({
  name: 'SettingsWindow',
  props: {
    citiesList: { type: Array, required: true },
  },
  emits: ['updateCities'],
  components: {
    IconHamburg,
    draggable
  },

  data() {
    return {
      dragging: false
    }
  },
  methods: {
    deleteCityLocalStorage(cityName:string):void {
      localStorage.deleteCity(cityName)
      this.$emit('updateCities')
    },
  }
})
</script>
<style scoped lang="scss">
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
</style>