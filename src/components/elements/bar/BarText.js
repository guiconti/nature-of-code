import React from 'react';
import PropTypes from 'prop-types';

const BarText = ({ fixedText, dynamicText }) => {
  return (
    <p>
      This is a bar text - {fixedText} {dynamicText}
    </p>
  );
};

BarText.propTypes = {
  fixedText: PropTypes.string.isRequired,
  dynamicText: PropTypes.string.isRequired
};

export default BarText;
