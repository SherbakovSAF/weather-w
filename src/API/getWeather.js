const getCityData = {
  apiKey: 'a9ca9b86577e80831689518b3b6a92a1',
  localObj: {},
  // 'computed'
  calcKelvin(k) {
    return k - 273.15
  },
  calcDewPoint(temp, humidity) {
    const tempC = this.calcKelvin(temp)
    const a = 17.27;
    const b = 237.7;
    const f = ((a * tempC) / (b + tempC)) + Math.log(humidity / 100.0)
    const dewPoint = (b * f) / (a - f);
    return dewPoint.toFixed()
  },
  getWindDirection(rotate) {
    const directions = {
      0: 'N',
      22.5: 'NNE',
      45: 'EN',
      67.5: 'EEN',
      90: 'E',
      112.5: 'EES',
      135: 'SE',
      157.5: 'SSE',
      180: 'S',
      202.5: 'SSW',
      225: 'SW',
      247.5: 'SWW',
      270: 'W',
      292.5: 'NWW',
      315: 'NW',
      337.5: 'NNW'
    };
    const closestRotate = Object.keys(directions).reduce((a, b) => Math.abs(b - rotate) < Math.abs(a - rotate) ? b : a);

    return directions[closestRotate];
  },
  // methods
  async getCityCoordinates(city) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`)
    const data = await response.json();
    const { lat, lon } = data[0];
    return { lat, lon };
  },
  async getCityWeather(cord) {
    const { lat, lon } = cord;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
    const data = await response.json();
    return data
  },
  makeWeatherObject(objectByAPI) {
    return {
      city: objectByAPI.name,
      country: objectByAPI.sys.country,
      weather: {
        temp: this.calcKelvin(objectByAPI.main.temp),
        feelsLike: this.calcKelvin(objectByAPI.main.feels_like),
        main: objectByAPI.weather[0].main,
        description: objectByAPI.weather[0].description
      },
      wind: {
        deg: objectByAPI.wind.deg,
        speed: objectByAPI.wind.speed,
        directionWind: this.getWindDirection(objectByAPI.wind.deg)
      },
      hPa: objectByAPI.main.pressure,
      humidity: objectByAPI.main.humidity,
      visibility: objectByAPI.visibility,
      dewPoint: this.calcDewPoint(objectByAPI.main.temp, objectByAPI.main.humidity)
    }
  },
  async getCityData(city) {
    let cord = await this.getCityCoordinates(city)
    let weatherDataApiObj = await this.getCityWeather(cord)
    return this.makeWeatherObject(weatherDataApiObj)
  },
};

export default getCityData

  // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&appid=a9ca9b86577e80831689518b3b6a92a1`).then(d=> d.json())
  // Запрос на проверку данных