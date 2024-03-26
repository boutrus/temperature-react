import React, { useState } from "react";
import beepSound from "./beeps.mp3";
import pingSound from "./ping.mp3";
import "./temperature.css";
import chillVideo from "./chill.mp4";
import coldVideo from "./cold.mp4";
import hotVideo from "./hot.mp4";
import warmVideo from "./warm.mp4";

function Temperature() {
  const [level, setLevel] = useState(10);

  const increment = () => {
    setLevel((prevlevel) => {
      new Audio(pingSound).play(); // Play beep sound
      return prevlevel + 1;
    });
  };

  const decrement = () => {
    setLevel((prevlevel) => {
      new Audio(beepSound).play(); // Play ping sound
      return prevlevel - 1;
    });
  };

  // Define a function to determine the text based on temperature level
  const getTemperatureText = () => {
    if (level >= 15 && level <= 30) {
      return "Warm";
    } else if (level >= 3 && level <= 14) {
      return "Chill";
    } else if (level >= 31 && level <= 100) {
      return "Hot";
    } else if (level <= 2) {
      return "Cold";
    } else {
      // If level is less than 2 or greater than 100, return an empty string
      return "";
    }
  };

  // Define a function to determine the classname based on temperature level
  const getTemperatureClass = () => {
    if (level >= 15 && level <= 30) {
      return "warm";
    } else if (level >= 3 && level <= 14) {
      return "chill";
    } else if (level >= 31 && level <= 100) {
      return "hot";
    } else if (level <= 2) {
      return "cold";
    } else {
      // If level is less than 2 or greater than 100, return an empty string
      return "";
    }
  };

  return (
    <div className={`temperature-container ${getTemperatureClass()}`}>
      <h2>Temperature App</h2>
      <p className="temperature-level">level: {level}°C</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Condition: {getTemperatureText()}</p>

      <div className="video-container">
        {getTemperatureClass() === "warm" && (
          <video controls autoPlay width="320" height="240">
            <source src={warmVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {getTemperatureClass() === "chill" && (
          <video controls autoPlay width="320" height="240">
            <source src={chillVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {getTemperatureClass() === "hot" && (
          <video controls autoPlay width="320" height="240">
            <source src={hotVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {getTemperatureClass() === "cold" && (
          <video controls autoPlay width="320" height="240">
            <source src={coldVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default Temperature;
