import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./FormatForecast.css";

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
    <div className="FormatForecast mt-5">
      <div className="day-of-week">{formatDays()}</div>
      <div className="weather-icons mt-3">
        <WeatherIcons code={data.weather[0].icon} size={54} />
      </div>
      <div className="max-min-temp mt-3 mb-3">
        {maxTemp()}°/{minTemp()}°
      </div>
    </div>
  );
}
