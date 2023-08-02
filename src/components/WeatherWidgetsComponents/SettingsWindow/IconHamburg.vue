<template>
     <div class="hamburg__icon">
          <span></span>
          <span></span>
          <span></span>
     </div>
</template>

<script>
export default {
     name: 'IconHamburg',
     props: {
          weather: {
               type: String,
               required: false, 
               default: 'sun'
          }
     }
}
</script>
<style scoped lang="scss">
.hamburg__icon{
     display: grid;
     grid-row-gap: 0.2em;
     span {
          display: block;
          width: 1em;
          height: 2px;
          background-color: black;
          border-radius: 5em;
     }
}
</style>
