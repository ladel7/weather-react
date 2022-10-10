import axios from "axios";
import React, { useState } from "react";
import WeatherIcons from "./WeatherIcons";

export default function Forecast({ latitude, longitude }) {
  let [forecastInfo, setForecastInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setLoaded(true);
    setForecastInfo(response.data.daily);
  }

  // let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  // axios.get(apiUrl).then((response) => {
  //   console.log(response);
  //   setLoaded(true);
  //   setForecastInfo(response.data.daily);
  // });

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div>Mon</div>
            <WeatherIcons code="02d" />
            <div>{Math.round(forecastInfo[0].temp.max)}°/ XX°</div>
          </div>
        </div>
        {setLoaded(false)}
      </div>
    );
  } else {
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
