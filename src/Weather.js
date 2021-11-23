import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  // const [state, setState] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kawasaki&APPID=a6e7346ac64558f1345eac552358e84e';
    // fetch('https://randomuser.me/api')
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setWeather(data));
  }, []);

  return (
    <>
      <div className="wrapper">
        {/* <div className="weather">Weather App</div> */}
        <div className="weather-details">
          <div className="top">
            <div className="location">{weather.name}</div>
            <div className="date">{weather.dt}</div>
          </div>
          <div className="left">
            <div className="icon">{weather.weather.icon}</div>
            <div className="details">{weather.weather.main}</div>
            <div className="details">{weather.weather.description}</div>
          </div>
          <div className="right">
            <div className="temp">{weather.main.temp}</div>
            <div className="humidity">{weather.main.temp_max}</div>
            <div className="humidity">{weather.main.temp_min}</div>
            <div className="humidity">{weather.main.humidity}</div>
          </div>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </div>
    </>
  );
};

export default Weather;
