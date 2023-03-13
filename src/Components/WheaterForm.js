import React, { useState } from "react";
import styleForm from "./WeatherForm.module.css";

const WheaterForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (city !== "") {
      onChangeCity(city);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={styleForm.form}>
      <input
        className={styleForm.inputDesign}
        type="text"
        placeholder="search a city..."
        onChange={handleOnChange}
      />
    </form>
  );
};

export default WheaterForm;
