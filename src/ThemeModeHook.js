import React from "react";

const useEffectThemeMode = () => {
  const [themeState, setThemeState] = React.useState({
    hasThemeMounted: false,
    dark: false
  });

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setThemeState(themeState => ({
      ...themeState,
      hasThemeMounted: true,
      dark: isDark
    }));
  }, []);

  return [themeState, setThemeState];
};

export default useEffectThemeMode;
