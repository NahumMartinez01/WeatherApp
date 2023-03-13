import React, { useState, useEffect } from "react";
import styles from "./WeatherApp.module.css";
import WeatherInfo from "./WeatherInfo";
import WheaterForm from "./WheaterForm";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInfoWeather();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""} - ${
      weather?.location.country ?? ""
    }`;
  }, [weather]);

  const loadInfoWeather = async (city = "san salvador") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      const data = await request.json();

      if (data.error) {
        setError(data.error.message);
        return;
      }

      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(weather);
  console.log(error);
  const handleChangeWeather = (city) => {
    setWeather(null);
    loadInfoWeather(city);
  };

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.titleApp}>WEATHER APP</h2>

      <div>
        {weather === null ? (
          <div>
            <WheaterForm onChangeCity={handleChangeWeather} />
            <div>
              <h2 className={styles.errorText}>{error}..</h2>
            </div>
          </div>
        ) : (
          <div>
            <WheaterForm onChangeCity={handleChangeWeather} />
            <WeatherInfo weatherInfo={weather} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
