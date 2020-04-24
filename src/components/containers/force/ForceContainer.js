import React, { useState } from 'react';
import Canvas from '../../elements/shared/Canvas';
import ForceInput from '../../elements/force/ForceInput';

const ForceContainer = () => {
  class Entity {
    constructor(size, mass, velocity, position) {
      this.size = size;
      this.mass = mass;
      this.velocity = velocity;
      this.position = position;
    }
    applyForce(force) {
      //  F = m * a
      const acceleration = new Vector(force);
      acceleration.divide(this.mass);
      this.velocity.add(acceleration);
    }
  }

  class Vector {
    constructor({ x, y }) {
      this.x = x;
      this.y = y;
    }
    add(vectorToBeAdded) {
      if (typeof vectorToBeAdded === 'number') {
        vectorToBeAdded = new Vector({ x: vectorToBeAdded, y: vectorToBeAdded });
      }
      this.x += vectorToBeAdded.x;
      this.y += vectorToBeAdded.y;
    }
    reduce(vectorToBeReduced) {
      if (typeof vectorToBeReduced === 'number') {
        vectorToBeReduced = new Vector({ x: vectorToBeReduced, y: vectorToBeReduced });
      }
      this.x -= vectorToBeReduced.x;
      this.y -= vectorToBeReduced.y;
    }
    divide(vectorToBeDivided) {
      if (typeof vectorToBeDivided === 'number') {
        vectorToBeDivided = new Vector({ x: vectorToBeDivided, y: vectorToBeDivided });
      }
      this.x /= vectorToBeDivided.x;
      this.y /= vectorToBeDivided.y;
    }
  }

  let entity;
  let running = false;
  const size = 50;
  const border = 5;
  const initialForce = new Vector({ x: 50, y: 5 });

  const toggleRunning = () => {
    running = !running;
  };

  const isXPositionInsideCanvas = (p5, x, entity) => {
    return x + entity.size / 2 < p5.width - border && x - entity.size / 2 > border;
  };

  const isYPositionInsideCanvas = (p5, y, entity) => {
    return y + entity.size / 2 < p5.height - border && y - entity.size / 2 > border;
  };

  const setup = (p5, parentRef) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(60);
    p5.noStroke();
    const { height, width } = p5;
    const minPositionX = border + size / 2;
    const maxPositionX = width - border - size / 2;
    const minPositionY = border + size / 2;
    const maxPositionY = height - border - size / 2;
    entity = new Entity(
      size,
      10,
      new Vector({ x: 0, y: 0 }),
      new Vector({
        x: Math.floor(Math.random() * (maxPositionX - minPositionX) + minPositionX),
        y: Math.floor(Math.random() * (maxPositionY - minPositionY) + minPositionY),
      })
    );
    entity.applyForce(initialForce);
  };

  const applyPhysics = p5 => {
    if (!running) {
      return;
    }
    let newPosition = new Vector(entity.position);
    newPosition.add(entity.velocity);

    if (!isXPositionInsideCanvas(p5, newPosition.x, entity)) {
      newPosition.reduce(entity.velocity);
      entity.velocity.x *= -1;
      newPosition.add(entity.velocity);
    }
    if (!isYPositionInsideCanvas(p5, newPosition.y, entity)) {
      newPosition.reduce(entity.velocity);
      entity.velocity.y *= -1;
      newPosition.add(entity.velocity);
    }

    entity.position = newPosition;
  };

  const draw = p5 => {
    p5.background(0);
    p5.noStroke();
    if (p5.mouseIsPressed && !running) {
      if (
        isXPositionInsideCanvas(p5, p5.mouseX, entity) &&
        isYPositionInsideCanvas(p5, p5.mouseY, entity)
      ) {
        entity.position = new Vector({ x: p5.mouseX, y: p5.mouseY });
      }
    }
    applyPhysics(p5);
    p5.fill(255);
    p5.circle(entity.position.x, entity.position.y, entity.size);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.line(
      entity.position.x,
      entity.position.y,
      entity.position.x + (entity.velocity.x * 10),
      entity.position.y + (entity.velocity.y * 10)
    );
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
      <ForceInput toggleRunning={toggleRunning} />
    </div>
  );
};

export default ForceContainer;
