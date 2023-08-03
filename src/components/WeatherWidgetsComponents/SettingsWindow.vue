<template>
  <div class="main__wrap">
    <div class="title__block">
      <h1>Settings</h1>
    </div>
    <Preloader v-if="isPreloader" />
    <settings-window-cities v-else
      @updateCities="$emit('updateCities')"
      :citiesList="citiesList"/>
    <add-new-city @updateCities="$emit('updateCities')"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Components
import SettingsWindowCities from './SettingsWindowCities.vue'
import Preloader from './SettingsWindowPreloader.vue'
import AddNewCity from './AddNewCity.vue'

export default defineComponent({
  name: 'SettingsWindow',
  props: {
    citiesList: { type: Array, required: true },
    isPreloader: {type: Boolean, required: false},
  },
  emits: ['updateCities'],
  components: {
    SettingsWindowCities,
    Preloader,
    AddNewCity
  }
})
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
</style>