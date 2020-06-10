import React from "react";
import useEffectThemeMode from "./ThemeModeHook";

const defaultContext = {
  dark: false,
  setTheme: () => { }
};

const ThemeContext = React.createContext(defaultContext);
const useTheme = () => React.useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectThemeMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggleTheme = () => {
    const dark = !themeState.dark;
    localStorage.setItem("themeType", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  return (
    <ThemeContext.Provider
      value={{
        dark: themeState.dark,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, useTheme };
