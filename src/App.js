import React from 'react';
import { useTheme } from "./providers/ThemeContextProvider";
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Main from './components/Main';

function App() {
  const themeState = useTheme();
  return (
    <div className={`App container-fluid ${themeState.dark ? "bg--dark" : "bg--light"}`}>
      <Header isDark={themeState.dark} />
      <Main />
      <Footer isDark={themeState.dark} />
    </div>
  );
}

export default App;
