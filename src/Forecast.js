import axios from "axios";
import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function Forecast({ city }) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "eec790e544b831eb1307518e7e3d5c07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div>Mon</div>
          <WeatherIcons code="02d" />
          <div>13°/4°</div>
        </div>
      </div>
    </div>
  );
}
