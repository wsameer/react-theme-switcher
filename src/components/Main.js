import React from 'react';
import ThemeSwitch from "./ThemeSwitch";
import SelectedTheme from './SelectedTheme';
import { useTheme } from "../providers/ThemeContextProvider";

const Main = () => {
  const themeState = useTheme();
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="toggleWrapper">
          <ThemeSwitch />
          <SelectedTheme isDark={themeState.dark} />
        </div>
      </div>
    </div>
  );
};

export default Main;
