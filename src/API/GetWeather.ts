interface WeatherData {
    city: string;
    country: string;
    weather: {
        temp: number;
        feelsLike: number;
        main: string;
        description: string;
    };
    wind: {
        deg: number;
        speed: number;
        directionWind: string;
    };
    hPa: number;
    humidity: number;
    visibility: number;
    dewPoint: string;
}

const getCityData = {
    apiKey: "a9ca9b86577e80831689518b3b6a92a1",
    localObj: {},
    // 'computed'
    calcKelvin(k: number): number {
        return k - 273.15;
    },
    calcDewPoint(temp: number, humidity: number): string {
        const tempC = this.calcKelvin(temp);
        const a = 17.27;
        const b = 237.7;
        const f = (a * tempC) / (b + tempC) + Math.log(humidity / 100.0);
        const dewPoint = (b * f) / (a - f);
        return dewPoint.toFixed();
    },
    getWindDirection(rotate: number): string {
        const directions: { [key: number]: string } = {
            0: "N",
            22.5: "NNE",
            45: "EN",
            67.5: "EEN",
            90: "E",
            112.5: "EES",
            135: "SE",
            157.5: "SSE",
            180: "S",
            202.5: "SSW",
            225: "SW",
            247.5: "SWW",
            270: "W",
            292.5: "NWW",
            315: "NW",
            337.5: "NNW",
        };
        const closestRotate = Object.keys(directions).reduce((a, b) =>
            Math.abs(Number(b) - rotate) < Math.abs(Number(a) - rotate) ? b : a
        );

        return directions[Number(closestRotate)];
    },
    // methods
    async getCityCoordinates(city: string): Promise<{ lat: number; lon: number }> {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.apiKey}`
        );
        const data = await response.json();
        const { lat, lon } = data[0];
        return { lat, lon };
    },
    async getCityWeather(cord: { lat: number; lon: number }): Promise<any> {
        const { lat, lon } = cord;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
        );
        const data = await response.json();
        return data;
    },
    makeWeatherObject(objectByAPI: any): WeatherData {
        return {
            city: objectByAPI.name,
            country: objectByAPI.sys.country,
            weather: {
                temp: this.calcKelvin(objectByAPI.main.temp),
                feelsLike: this.calcKelvin(objectByAPI.main.feels_like),
                main: objectByAPI.weather[0].main,
                description: objectByAPI.weather[0].description,
            },
            wind: {
                deg: objectByAPI.wind.deg,
                speed: objectByAPI.wind.speed,
                directionWind: this.getWindDirection(objectByAPI.wind.deg),
            },
            hPa: objectByAPI.main.pressure,
            humidity: objectByAPI.main.humidity,
            visibility: objectByAPI.visibility,
            dewPoint: this.calcDewPoint(
                objectByAPI.main.temp,
                objectByAPI.main.humidity
            ),
        };
    },
    async getCityData(city: string): Promise<WeatherData> {
        const cord = await this.getCityCoordinates(city);
        const weatherDataApiObj = await this.getCityWeather(cord);
        return this.makeWeatherObject(weatherDataApiObj);
    },
};

export default getCityData;
