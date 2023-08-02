<template>
     <button>
          <img v-if="!isSettings" src="@/assets/icons/settings.svg" alt="Settings">
          <img id="close" v-else src="@/assets/icons/close.svg" alt="Close">
     </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
     name: 'SettingsWindowPreloader',
     props: {
          isSettings: {
               type: Boolean,
               required: true
          }
     }
})
</script>

<style scoped lang="scss">
button {
     background-color: transparent;
     padding: 0;
     border: none;
     width: 2em;
     height: 2em;

     position: absolute;
     left: 100%;
     transform: translate(-100%, -10%);

     cursor: pointer;
          img {
               height: inherit;
               width: inherit;
          }
     #close{
          width: 1.5em;
          height: 1.5em;
     }
}


</style>