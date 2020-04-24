import React from 'react';
import Canvas from '../../elements/shared/Canvas';

const ForceContainer = () => {
  class Entity {
    constructor(size, mass, velocity, position) {
      this.size = size;
      this.mass = mass;
      this.velocity = velocity;
      this.position = position;
    }
  }

  class Vector {
    constructor({ x, y }) {
      this.x = x;
      this.y = y;
    }
    add(vectorToBeAdded) {
      this.x += vectorToBeAdded.x;
      this.y += vectorToBeAdded.y;
    }
    remove(vectorToBeRemoved) {
      this.x -= vectorToBeRemoved.x;
      this.y -= vectorToBeRemoved.y;
    }
  }

  let entity;
  const size = 50;
  const border = 5;

  const setup = (p5, parentRef) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(60);
    const { height, width } = p5;
    const minPositionX = border + size / 2;
    const maxPositionX = width - border - size / 2;
    const minPositionY = border + size / 2;
    const maxPositionY = height - border - size / 2;
    entity = new Entity(
      size,
      1,
      new Vector({ x: 5, y: 5 }),
      new Vector({
        x: Math.floor(Math.random() * (maxPositionX - minPositionX) + minPositionX),
        y: Math.floor(Math.random() * (maxPositionY - minPositionY) + minPositionY),
      })
    );
  };

  const draw = p5 => {
    p5.stroke(0);
    p5.background(0);
    p5.noStroke();
    p5.fill(255);

    let newPosition = new Vector(entity.position);
    newPosition.add(entity.velocity);

    if (
      newPosition.x + entity.size / 2 >= p5.width - border ||
      newPosition.x - entity.size / 2 <= border
    ) {
      newPosition.remove(entity.velocity);
      entity.velocity.x *= -1;
      newPosition.add(entity.velocity);
    }
    if (
      newPosition.y + entity.size / 2 >= p5.height - border ||
      newPosition.y - entity.size / 2 <= border
    ) {
      newPosition.remove(entity.velocity);
      entity.velocity.y *= -1;
      newPosition.add(entity.velocity);
    }
    
    entity.position = newPosition;
    p5.circle(entity.position.x, entity.position.y, entity.size);
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
    </div>
  );
};

export default ForceContainer;
