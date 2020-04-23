import React from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';

const Canvas = ({ setup, draw }) => {
  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
}

Canvas.propTypes = {
  setup: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
};

export default Canvas;