import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import TemperatureUnit from "./TemperatureUnit";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";
import WeatherIcons from "./WeatherIcons";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [city, setCity] = useState("New York");
  const [weatherInfo, setWeatherInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showWeather() {
    let apiKey = "eec790e544b831eb1307518e7e3d5c07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setLoaded(true);
      setWeatherInfo({
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: response.data.weather[0].icon,
        cityName: response.data.name,
        timezone: response.data.timezone,
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    showWeather();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="weather">
          <div className="row">
            <div className="col-md">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Type a city"
                  onChange={updateCity}
                />
                <input type="submit" value="search" />
              </form>
            </div>
          </div>
          <div>
            <h1>{weatherInfo.cityName}</h1>
            <div className="row">
              <div className="col-md-5">
                <ul>
                  <li>
                    Date: <FormattedDate timezone={weatherInfo.timezone} />
                  </li>
                  <li>Description: {weatherInfo.description}</li>
                  <li>Humidity: {weatherInfo.humidity}%</li>
                  <li>Wind: {weatherInfo.wind} km/h</li>
                </ul>
              </div>
              <div className="col-md-7">
                <WeatherIcons code={weatherInfo.icon} />
                <TemperatureUnit celsius={weatherInfo.temp} />
              </div>
            </div>
          </div>
          <Forecast latitude={weatherInfo.lat} longitude={weatherInfo.lon} />
        </div>
      </div>
    );
  } else {
    return showWeather();
  }
}
