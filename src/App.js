import React, { useState } from "react";
import axios from "axios";

export default function App() {
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      {weatherInfo ? (
        <ul>
          <li>City: {weatherInfo.cityName}</li>
          <li>Temperature: {weatherInfo.temp}°C</li>
          <li>Description: {weatherInfo.description}</li>
          <li>Humidity: {weatherInfo.humidity}%</li>
          <li>Wind: {weatherInfo.wind} km/h</li>
        </ul>
      ) : (
        showWeather()
      )}
      <p>
        <a href="https://github.com/ladel7/weather-react">Open-source code</a>{" "}
        by Lucy Adelson
      </p>
    </div>
  );
}
