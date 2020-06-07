import React from 'react';

function Footer({ isDark }) {
  return (
    <nav className={`navbar fixed-bottom ${isDark ? 'navbar-dark bg--dark' : 'navbar-light bg--light'}`}>
      <div className="t-footer">
        <a href="https://codepen.io/bnthor" className="float-right" target="_blank" rel="noopener noreferrer">
          Styling credits: Benjamin Rethore
        </a>
      </div>
    </nav>
  );
};

export default Footer;
