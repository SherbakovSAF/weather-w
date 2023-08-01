<template>
  <div class="main__wrap">
    <div class="title__block">
      <h1>Settings</h1>
    </div>
    <div class="cities__wrap">
      <article>
        <div class="content__wrap">
          <icon-hamburg />
          <h1>London</h1>
          <button><img src="@/assets/icons/garb.svg" alt="Корзина"></button>
        </div>
      </article>
      <article>
        <div class="content__wrap">
          <icon-hamburg />
          <h1>London</h1>
          <button><img src="@/assets/icons/garb.svg" alt="Корзина"></button>
        </div>
      </article>
    </div>
    <div class="new__location__wrap">
      <h2>Add Location:</h2>
      <div class="input__block">
        <input type="text">
        <button><img src="@/assets/icons/enter.svg" alt="Ввод"></button>
      </div>
    </div>
  </div>
</template>

<script>
import IconHamburg from '@/components/WeatherWidgetsComponents/SettingsWindow/IconHamburg'
export default {
  name: 'MainWindowWeatherWidgets',
  components: {
    IconHamburg
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

      button {
        margin-left: 10px;
        height: 2em;
      }
    }
  }
</style>
