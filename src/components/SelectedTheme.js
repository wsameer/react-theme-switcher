import React from 'react';
import PropTypes from 'prop-types';

function SelectedTheme({ isDark, t }) {

  return (
    <p style={{ letterSpacing: "1px", marginTop: "1em" }}>
      {t('Selected theme')}: {isDark ? t('Dark') : t('Light')}
    </p>
  )
}

SelectedTheme.propTypes = {
  isDark: PropTypes.bool.isRequired
};

export default SelectedTheme
