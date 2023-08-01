<template>
     <button>
          <img src="@/assets/icons/settings.svg" alt="Settings">
     </button>
</template>

<script>
export default {
     name: 'SettingsButton',
     
}
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
}


</style>