<template>
  <div class="main__wrap">
    <div class="info__panel">
      <h1 class="main__window__city">London, UK</h1>
      <button>
        <img src="../../assets/icons/settings.svg" alt="Settings">
      </button>
    </div>
    <div id="icon__weather">
      Инконка
      <h2><span>7</span>°C</h2>
    </div>
    <div class="info__block">Feels like <span>-3C</span>. <span>Broken clouds. Light breeze</span></div> 
    <div class="info__block wind__block">
      <div class="wind__item">
        <div>
          <img id="direction" src="../../assets/icons/direction.svg" alt="Direction">
        </div>
        <div><span>3m/s</span>SSE</div>
      </div>
      <div class="wind__item">
        <img src="../../assets/icons/compass.svg" alt="Compass">
        <div>1021hPA</div>
      </div>
    </div>
    <div class="info__block wind__block">
      <div>
        Humidity: <span>97%</span>
      </div>
      <div>
        Dew point: <span>0C</span>
      </div>
    </div>
    <div class="info__block">Visibility 10km</div>
  </div>
</template>

<script>
export default {
  name: 'MainWindowWeatherWidgets',
}
</script>
<style scoped lang="scss">
.main__wrap {
  font-size: 15px;
  width: 270px;
  font-weight: 500;

  img {
    width: 2em;
    height: 2em;
  }

  .info__panel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: inherit;
      font-weight: 600;
    }

    button {
      background-color: transparent;
      border: none;

    }
  }

  #icon__weather {
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 45px;
      font-weight: 500;
      margin: 0;
      margin-left: 20px;
    }
  }

  .info__block {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .wind__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .wind__item{
      display: flex;
      align-items: center;
      
      img{
        width: 1em;
        height: 1em;
        margin-right: 5px;
      }

      #direction{
        rotate: -43deg;
      }
    }
  }



}</style>
