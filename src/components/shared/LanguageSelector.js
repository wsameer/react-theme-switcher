import React from 'react';
import PropTypes from 'prop-types';

const LanguageSelector = props => {
  const { selectedLang, onLangChange } = props;

  return (
    <select className="custom-select lang-select" value={selectedLang} onChange={onLangChange}>
      <option value="en">English</option>
      <option value="jp">Japanese</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  );
};

LanguageSelector.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired
};

export default LanguageSelector;
