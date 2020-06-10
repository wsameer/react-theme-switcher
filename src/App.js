import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from "./providers/ThemeContextProvider";
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Main from './components/Main';

function App() {
  const themeState = useTheme();
  const { t, i18n, ready } = useTranslation('translations', { useSuspense: false });
  const [selectedLang, setSelectedLang] = useState('');

  const onLangChange = (event) => {
    console.log(`language changed to ${event.target.value}`);
    const language = event.target.value;
    setSelectedLang(language);
    i18n.changeLanguage(language);
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`App container-fluid ${themeState.dark ? "bg--dark" : "bg--light"}`}>
      <Header
        selectedLang={selectedLang}
        onLangChange={onLangChange}
        isDark={themeState.dark}
        t={t}
      />
      <Main t={t} />
      <Footer isDark={themeState.dark} />
    </div>
  );
}

export default App;
