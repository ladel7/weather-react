import axios from "axios";
import React, { useState, useEffect } from "react";
import FormatForecast from "./FormatForecast";

export default function Forecast({ latitude, longitude }) {
  let [forecastInfo, setForecastInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [latitude, longitude]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastInfo(response.data.daily);
  }

  function getForecast() {
    let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          {forecastInfo.map(function (forecastDay, index) {
            if (index < 4) {
              return (
                <div className="col-sm" key={index}>
                  <div>
                    <FormatForecast data={forecastDay} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return getForecast();
  }
}
