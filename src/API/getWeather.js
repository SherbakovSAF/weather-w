const getCityData = {
  apiKey: 'a9ca9b86577e80831689518b3b6a92a1',
  // 'computed'
  calcKelvin(k) {
  return k - 2783.15
  },
  calcDewPoint(temp, humidity){
  return this.calcKelvin(temp) - ((100 - humidity) / 5)
  },
  // methods
  async getCityCoordinates(city) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`)
  const data = await response.json();
  const { lat, lon } = data[0];
  return {lat, lon};
  },
  async getCityWeather(cord) {
  const { lat, lon } = cord;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
  const data = await response.json();
  return data
  },
  makeWeatherObject(objectByAPI){
  return {
  city: objectByAPI.name,
  country: objectByAPI.sys.country,
  temp: {
  feelsLike: this.calcKelvin(objectByAPI.main.feels_like),
  description: objectByAPI.weather[0].description
  },
  wind: {
  deg: objectByAPI.wind.deg,
  speed: objectByAPI.wind.speed
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
  }};
  
  export default getCityData