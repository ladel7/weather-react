import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let city = "Paris";
  let [temp, setTemp] = useState(null);
  let apiKey = "eec790e544b831eb1307518e7e3d5c07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  function showWeather(response) {
    setTemp(response.data.main.temp);
  }

  return (
    <div className="App">
      <h2>test</h2>
      <p>
        The temperature in {city} is {temp}
      </p>
    </div>
  );
}

export default App;
