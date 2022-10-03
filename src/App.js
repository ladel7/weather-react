import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="app">
      <Weather />
      <small>
        <a href="https://github.com/ladel7/weather-react" className="git-link">
          Open-source code
        </a>{" "}
        by Lucy Adelson
      </small>
    </div>
  );
}
