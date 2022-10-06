import React from "react";

export default function FormattedDate({ timezone }) {
  let currentDate = new Date();
  let currentTime = currentDate.getTime();
  let offset = currentDate.getTimezoneOffset() * 60000;
  let localDate = new Date(currentTime + offset + 1000 * timezone);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[localDate.getDay()];
  let hour = localDate.getHours();
  let minutes = localDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return (
    <div>
      {currentDay}, {hour}:{minutes}
    </div>
  );
}
