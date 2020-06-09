import React from "react";
import { useTheme } from "../ThemeContextProvider";

const ThemeSwitch = () => {
  const themeState = useTheme();

  const stars = Array(6).fill('star').map((value, index) => (
    <span key={index} className={`star star--${index + 1}`} />
  ));

  const craters = Array(3).fill().map((value, index) => (
    <span key={index + 7} className={`crater crater--${index + 1}`} />
  ));

  return (
    <>
      <input
        type="checkbox"
        className="day_night"
        id="day-night"
        checked={themeState.dark}
        onChange={() => themeState.toggleTheme()}
      />
      <label htmlFor="day-night" className="toggle">
        <span className="toggle__handler">
          {craters}
        </span>
        {stars}
      </label>
    </>
  );
};

export default ThemeSwitch;
