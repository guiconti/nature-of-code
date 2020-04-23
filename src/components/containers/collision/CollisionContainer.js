import React from 'react';
import Canvas from '../../elements/shared/Canvas';

const CollisionContainer = () => {

  const setup = (p5, parentRef) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(30);
    p5.noStroke();
  };

  const draw = p5 => {
    p5.background(0);
  };

  return (
    <Canvas setup={setup} draw={draw} />
  );
};

export default CollisionContainer;
