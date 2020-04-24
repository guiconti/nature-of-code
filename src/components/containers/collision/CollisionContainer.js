import React from 'react';
import Canvas from '../../elements/shared/Canvas';
import CollisionInput from '../../elements/collision/CollisionInput';

const CollisionContainer = () => {
  class Entity {
    constructor(size, mass, velocity, position) {
      this.size = size;
      this.mass = mass;
      this.velocity = velocity;
      this.position = position;
    }
  }

  let firstEntity;
  let secondEntity;
  const sizeOfSquare = 50;
  const border = 5;

  const setup = (p5, parentRef) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(60);
    const { height, width } = p5;
    // p5.noStroke();
    firstEntity = new Entity(
      sizeOfSquare,
      1,
      { x: 5, y: 0 },
      { x: border, y: height - sizeOfSquare - border }
    );
    secondEntity = new Entity(
      sizeOfSquare,
      1,
      { x: -5, y: 0 },
      {
        x: width - sizeOfSquare - border,
        y: height - sizeOfSquare - border,
      }
    );
  };

  const draw = p5 => {
    p5.stroke(0);
    p5.background(0);
    p5.noStroke();
    p5.fill(255);
    p5.square(firstEntity.position.x, firstEntity.position.y, secondEntity.size);
    p5.square(secondEntity.position.x, secondEntity.position.y, secondEntity.size);
    firstEntity.position.x += firstEntity.velocity.x;
    firstEntity.position.y += firstEntity.velocity.y;
    secondEntity.position.x += secondEntity.velocity.x;
    secondEntity.position.y += secondEntity.velocity.y;
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
      <CollisionInput />
    </div>
  );
};

export default CollisionContainer;
