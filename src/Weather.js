import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  // const [state, setState] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
        data.dt2 = new Date(data.dt * 1000).toDateString();
        setForecast(data);
        console.log({ data });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="wrapper">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <div className="wrapper">
            <div className="weather-details">
              <div className="top">
                <span className="location fltLeft">{forecast.name}</span>
                <span className="date fltRight">{forecast.dt2}</span>
              </div>
              <div className="align-center left">
                <div className="icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0]['icon']}@2x.png`}
                    alt=""
                  ></img>
                </div>
                <div className="details">
                  <span className="mainWeather">
                    {forecast.weather[0]['main']}
                  </span>
                </div>
                <div className="details">
                  {forecast.weather[0]['description']}
                </div>
              </div>
              <div className="align-center right">
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
      )}
    </>
  );
};

export default Weather;
