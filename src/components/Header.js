import React from 'react';

function Header({ isDark }) {
  return (
    <nav className={`navbar fixed-top ${isDark ? 'navbar-dark bg--dark' : 'navbar-light bg--light'}`}>
      <span className="navbar-brand mb-0">React Theme Switch</span>
      <p className="mb-0 float-right">
        Developed by: <a href="https://github.com/wsameer" target="_blank" rel="noopener noreferrer">Sameer Waskar</a>
      </p>
    </nav>
  );
};

export default Header;
