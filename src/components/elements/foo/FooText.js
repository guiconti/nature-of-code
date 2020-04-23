import React from 'react';
import PropTypes from 'prop-types';

const FooText = ({ fixedText, dynamicText }) => {
  return (
    <p>
      This is a foo text - {fixedText} {dynamicText}
    </p>
  );
};

FooText.propTypes = {
  fixedText: PropTypes.string.isRequired,
  dynamicText: PropTypes.string.isRequired
};

export default FooText;
