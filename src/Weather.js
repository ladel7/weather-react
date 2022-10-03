import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  const [city, setCity] = useState("New York");
  const [weatherInfo, setWeatherInfo] = useState(null);

  function showWeather() {
    let apiKey = "eec790e544b831eb1307518e7e3d5c07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setWeatherInfo({
        temp: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        cityName: response.data.name,
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
        {weatherInfo ? (
          <div>
            <h1>{weatherInfo.cityName}</h1>
            <div className="row">
              <div className="col-md-5">
                <ul>
                  <li>Description: {weatherInfo.description}</li>
                  <li>Humidity: {weatherInfo.humidity}%</li>
                  <li>Wind: {weatherInfo.wind} km/h</li>
                </ul>
              </div>
              <div className="col-md-7">
                <h2>
                  <img src={weatherInfo.icon} alt={weatherInfo.description} />
                  {weatherInfo.temp}°C
                </h2>
              </div>
            </div>
          </div>
        ) : (
          showWeather()
        )}
      </div>
    </div>
  );
}
