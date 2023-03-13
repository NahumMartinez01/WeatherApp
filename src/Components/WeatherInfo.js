import React from "react";
import styleInfo from "./WeatherInfo.module.css";
const WeatherInfo = ({ weatherInfo }) => {
  return (
    <div>
      <div className={styleInfo.containerLocation}>
        <h4>{weatherInfo.current.last_updated}</h4>
        <h2>
          {weatherInfo.location.name} - {weatherInfo.location.country}
        </h2>
      </div>
      <div className={styleInfo.containerTemp}>
        <div className={styleInfo.changeDay}>
          <p>{weatherInfo.current.is_day ? "🌞" : "🌙"}</p>
        </div>
        <div>
          <p>
            🌡 {weatherInfo.current.temp_c}
            <span>°C</span>
          </p>
          <p>
            🌫 {weatherInfo.current.wind_kph}
            <span>Km/h</span>
          </p>
        </div>
      </div>
      <div className={styleInfo.containerExInfo}>
        <img
          src={weatherInfo.current.condition.icon}
          alt={weatherInfo.current.condition.text}
        />
        <h5>{weatherInfo.current.condition.text}</h5>
      </div>
      <div className={styleInfo.map}>
        <iframe
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d73226.43169942322!2d${weatherInfo.location.lon}!3d${weatherInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ssv!4v1668027572481!5m2!1ses-419!2ssv`}
          width="350"
          height="280"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default WeatherInfo;
