import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import './styles/forceInput.scss';

const ForceInput = ({ toggleRunning }) => {
  return (
    <div className="force-input">
      <Button onClick={toggleRunning}>Start/Stop</Button>
    </div>
  );
};

ForceInput.propTypes = {
  toggleRunning: PropTypes.func,
};


export default ForceInput;
