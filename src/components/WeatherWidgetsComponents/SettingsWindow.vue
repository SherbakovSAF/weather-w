<template>
  <div>
    <div class="title__block">
      <h1>Settings</h1>
    </div>
    <div>
      <article>
        <div>Иконка</div>
        <h1>London</h1>
        <button>Delete</button>
      </article>
    </div>
    <div>
      <h2>Add Location</h2>
      <div>
        <input type="text">
        <button>Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainWindowWeatherWidgets',
}
</script>
<style scoped lang="scss">
.title__block{
  h1{
    font-size: 15px;
    font-weight: 600;
  }
}
</style>
