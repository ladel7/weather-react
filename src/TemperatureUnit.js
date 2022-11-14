import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit({ fahrenheit }) {
  const [unit, setUnit] = useState("fahrenheit");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return Math.round((fahrenheit - 32) * (5 / 9));
  }

  if (unit === "fahrenheit") {
    return (
      <span className="temperatureUnit">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit-wrapper">
          <span className="unit">°F</span>{" "}
          <span className="unit-separator">|</span>{" "}
          <span className="unit">
            <a href="/" onClick={toCelsius} className="unit-link">
              °C
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperatureUnit">
        <span className="temperature">{celsius()}</span>
        <span className="unit-wrapper">
          <span className="unit">
            <a href="/" onClick={toFahrenheit} className="unit-link">
              °F
            </a>
          </span>{" "}
          <span className="unit-separator">|</span>{" "}
          <span className="unit">°C</span>
        </span>
      </span>
    );
  }
}
