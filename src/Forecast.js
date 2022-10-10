import axios from "axios";
import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function Forecast({ lat, lon }) {
  let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then((response) => {
    console.log(response);
    // let forecast = response.data.list; //api returns forecast every 3 hours for 5 days
    // let dailyForecast = [7, 15, 23, 31, 39]; //array of weather every 24 hours
    // dailyForecast.map((index) => {
    //   return {};
    // });
  });

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
