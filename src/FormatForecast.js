import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function FormatForecast({ data }) {
  function formatDays() {
    let forecastDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let date = new Date(data.dt * 1000);
    let dayIndex = date.getDay();
    return forecastDays[dayIndex];
  }
  function maxTemp() {
    return Math.round(data.temp.max);
  }
  function minTemp() {
    return Math.round(data.temp.min);
  }

  return (
    <div className="FormatForecast">
      <div>{formatDays()}</div>
      <div>
        <WeatherIcons code={data.weather[0].icon} />
      </div>
      <div>
        {maxTemp()}°/{minTemp()}°
      </div>
    </div>
  );
}
