import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({
    description: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: ""
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  const searchWeather = () => {
    Axios.get('https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=e83b3c4c08285bf87b99f9bbc0abe3f0').then((response) => {
      setWeatherData({
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        country: response.data.sys.country
      });
      setDataLoaded(true)
    })
  }

  return (
    <div className="App">
      <h1>Current Weather</h1>
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => (e.target.value)} 
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      <div className="display-data-container">
        {dataLoaded && (
          <div className='data'>
            <h3>description: {weatherData.description}</h3>
            <h3>temp: {weatherData.temp}</h3>
            <h3>temp min: {weatherData.temp_min}</h3>
            <h3>temp max: {weatherData.temp_max}</h3>
            <h3>humidity: {weatherData.humidity}</h3>
            <h3>sunrise: {weatherData.sunrise}</h3>
            <h3>sunset: {weatherData.sunset}</h3>
            <h3>country: {weatherData.country}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
