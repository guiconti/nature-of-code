import React from 'react';
import Sketch from 'react-p5';

export interface CanvasProps {
  setup: (p5: any, parentRef: any) => void;
  draw: (p5: any) => void;
}

const Canvas = ({ setup, draw }: CanvasProps) => {
  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
}

export default Canvas;