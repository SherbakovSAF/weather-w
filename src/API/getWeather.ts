// Функция для получения координат города
const getCityCoordinates = async(city) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a9ca9b86577e80831689518b3b6a92a1`);
  const data = await response.json();
  const { lat, lon } = data[0];
  return { lat, lon };
}

// Функция для получения погоды города
const getCityWeather = async(coordinates) => {
  const { lat, lon } = coordinates;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9ca9b86577e80831689518b3b6a92a1`);
  const data = await response.json();
  return data;
}

const calcKelvin = (k) => {
  return k - 2783.15
}

const calcDewPoint = (temp, humidity ) => {
  return calcKelvin(temp) - ((100 - humidity) / 5)
}

const getWeatherObject = (objectByAPI) => {
  return {
    city: objectByAPI.coord.name,
    country: objectByAPI.sys.country,
    temp: {
      feelsLike: calcKelvin(objectByAPI.main.feels_like),
      description: objectByAPI.weather[0].description
    },
    wind: {
      deg: objectByAPI.wind.deg,
      speed: objectByAPI.wind.speed
    },
    hPa: objectByAPI.main.pressure,
    humidity: objectByAPI.main.humidity,
    visibility: objectByAPI.visibility,
    dewPoint: calcDewPoint(objectByAPI.main.temp, objectByAPI.main.humidity,)
  }
}

const getWeather = async(cityName) => {
  
}

export default getWeatherObject