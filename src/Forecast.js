import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function Forecast() {
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
