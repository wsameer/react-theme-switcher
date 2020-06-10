import React from 'react';
import LanguageSelector from './LanguageSelector';

function Header(props) {
  const { isDark, selectedLang, onLangChange, t } = props;

  return (
    <nav className={`navbar fixed-top ${isDark ? 'navbar-dark bg--dark' : 'navbar-light bg--light'}`}>
      <span className="navbar-brand mb-0">React Theme Switch</span>
      <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex pr-4">
        <LanguageSelector
          selectedLang={selectedLang}
          onLangChange={onLangChange}
        />
      </div>
      <p className="navbar-text">
        {t('Developed by')}: <a href="https://github.com/wsameer" target="_blank" rel="noopener noreferrer">Sameer Waskar</a>
      </p>
    </nav>
  );
};

export default Header;
