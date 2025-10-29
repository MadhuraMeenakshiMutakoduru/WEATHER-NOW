// Importing necessary React features and assets
import React, { useState } from "react";
import "./Weather.css";

// Importing weather-related icons
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
   // State variables
 const [inputCity, setInputCity] = useState("");
const [city, setCity] = useState("");
const [weatherData, setWeatherData] = useState(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

//Fetch weather info from Open-Meteo API
  const getWeather = async (cityName) => {
    try {
      setLoading(true); 
       setError("");
//Get latitude and longitude for the entered city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found");
        setWeatherData(null);
        return;
      }
      
    // Extract coordinates
      const { latitude, longitude } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto`
      );
      const data = await weatherRes.json();
      // Save weather details to state
       setWeatherData({
        ...data.current,
        time: data.current.time,
        timezone: data.timezone,
      });

      setError("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
    
    finally {
      setLoading(false); // 👈 hide loader after done
    }
  };

  //  Function to change background color based on temperature
const getBackgroundColor = () => {
    if (!weatherData) return "#6c63ff"; // Default purple
    const temp = weatherData.temperature_2m;
    if (temp >= 30) return "#fbc531"; // Hot - yellow
    if (temp >= 20) return "#74b9ff"; // Warm - blue
    if (temp >= 10) return "#a29bfe"; // Cool - violet
    return "#81ecec"; // Cold - icy blue
  };
  
  

  return (
     <div
      className="weather"
      style={{
        background: `linear-gradient(135deg, ${getBackgroundColor()}, #2d3436)`,
      }}
    >
      <h2 className="app-title">Instant Weather 🌤️</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={(e) => {
    if (e.key === "Enter") {
      setCity(inputCity);
      getWeather(inputCity);
    }
  }}
        />
        <img src={search_icon} alt="search"  onClick={() => {
    setCity(inputCity);
    getWeather(inputCity);
  }} />
    
      </div>


      {loading && <p className="loading">Fetching magic ✨ ...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <>
          <img 
          src={
    weatherData.temperature_2m >= 30
      ? clear_icon
      : weatherData.temperature_2m >= 20
      ? cloud_icon
      : weatherData.temperature_2m >= 10
      ? rain_icon
      : snow_icon
  }
          alt="weather" className="weather-icon" />
          <p className="temp">{weatherData.temperature_2m}°C</p>
          <p className="city">{city}</p>



          <div className="weather-data">
            
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.relative_humidity_2m}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.wind_speed_10m} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
