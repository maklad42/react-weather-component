import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  // const [state, setState] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kawasaki&APPID=a6e7346ac64558f1345eac552358e84e';
    // fetch('https://randomuser.me/api')
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setForecast(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        {/* <div className="weather">Weather App</div> */}
        <div className="weather-details">
          <div className="top">
            <div className="location">{forecast.name}</div>
            <div className="date">{forecast.dt}</div>
          </div>
          <div className="left">
            <div className="icon">{forecast.icon}</div>
            <div className="details">{forecast.weather[0]['main']}</div>
            <div className="details">{forecast.weather[0]['description']}</div>
          </div>
          <div className="right">
            <div className="temp">{forecast.main.temp}</div>
            <div className="humidity">{forecast.main.temp_max}</div>
            <div className="humidity">{forecast.main.temp_min}</div>
            <div className="humidity">{forecast.main.humidity}</div>
          </div>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(forecast, null, 2)}</pre>
      </div>
    </>
  );
};

export default Weather;
