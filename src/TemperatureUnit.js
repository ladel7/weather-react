import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round(celsius * (9 / 5) + 32);
  }

  if (unit === "celsius") {
    return (
      <span className="temperatureUnit">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit-wrapper">
          <span className="unit">°C</span>{" "}
          <span className="unit-separator">|</span>{" "}
          <span className="unit">
            <a href="/" onClick={toFahrenheit} className="unit-link">
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperatureUnit">
        <span className="temperature">{fahrenheit()}</span>
        <span className="unit-wrapper">
          <span className="unit">
            <a href="/" onClick={toCelsius} className="unit-link">
              °C
            </a>
          </span>{" "}
          <span className="unit-separator">|</span>{" "}
          <span className="unit">°F</span>
        </span>
      </span>
    );
  }
}
