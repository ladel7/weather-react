import axios from "axios";
import React, { useState } from "react";
import WeatherIcons from "./WeatherIcons";

export default function Forecast({ latitude, longitude }) {
  let [forecastInfo, setForecastInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then((response) => {
    console.log(response);
    setLoaded(true);
    setForecastInfo({
      maxTemp: response.data.daily[0].temp.max,
      minTemp: response.data.daily[0].temp.min,
    });
  });

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div>Mon</div>
            <WeatherIcons code="02d" />
            <div>
              {Math.round(forecastInfo.maxTemp)}°/
              {Math.round(forecastInfo.minTemp)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}
