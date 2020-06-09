import React from 'react';
import PropTypes from 'prop-types';

function SelectedTheme({ isDark }) {
  return (
    <p style={{ letterSpacing: "1px", marginTop: "1em" }}>
      Selected theme: {isDark ? 'Dark' : 'Light'}
    </p>
  )
}

SelectedTheme.propTypes = {
  isDark: PropTypes.bool.isRequired
};

export default SelectedTheme
