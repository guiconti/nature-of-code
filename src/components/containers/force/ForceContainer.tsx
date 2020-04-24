import React from 'react';
import Canvas from '../../elements/shared/Canvas';
import ForceInput from '../../elements/force/ForceInput';
import Entity from '../../../utils/Entity';
import Vector from '../../../utils/Vector';
import isXSmallerThanCanvas from '../../../utils/isXSmallerThanCanvas';
import isXBiggerThanCanvas from '../../../utils/isXBiggerThanCanvas';
import isYSmallerThanCanvas from '../../../utils/isYSmallerThanCanvas';
import isYBiggerThanCanvas from '../../../utils/isYBiggerThanCanvas';

const ForceContainer = () => {
  let entities: Array<Entity> = [];
  let running = false;
  const amountOfEntities = 5;
  const size = 50;
  const border = 5;
  const gravity = new Vector({ x: 0, y: 0.3 });

  const toggleRunning = () => {
    running = !running;
  };

  const setup = (p5: any, parentRef: any) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(60);
    p5.noStroke();
    const { height, width } = p5;
    const minPositionX = border + size / 2;
    const maxPositionX = width - border - size / 2;
    const minPositionY = border + size / 2;
    const maxPositionY = height - border - size / 2;
    for (let i = 0; i < amountOfEntities; i++) {
      entities[i] = new Entity(
        size,
        10,
        0.9,
        new Vector({ x: 0, y: 0 }),
        new Vector({
          x: Math.floor(Math.random() * (maxPositionX - minPositionX) + minPositionX),
          y: Math.floor(Math.random() * (maxPositionY - minPositionY) + minPositionY),
        })
      );
      let force = new Vector({
        x: Math.floor(Math.random() * 600 - 300),
        y: Math.floor(Math.random() * 600 - 300)
      });
      entities[i].applyForce(force);
    }
  };

  const applyPhysics = (p5: any, entity: Entity) => {
    if (!running) {
      return;
    }
    entity.velocity.add(gravity);
    entity.position.add(entity.velocity);

    if (isXSmallerThanCanvas(border, entity.position.x, entity)) {
      entity.position.x = border + entity.size / 2;
      entity.velocity.x *= -1 * entity.bounciness;

    } else if (isXBiggerThanCanvas(p5.width, border, entity.position.x, entity)) {
      entity.position.x = p5.width - border - entity.size / 2;
      entity.velocity.x *= -1 * entity.bounciness;
    }
    if (isYSmallerThanCanvas(border, entity.position.y, entity)) {
      entity.position.y = border + entity.size / 2;
      entity.velocity.y *= -1 * entity.bounciness;
    } else if (isYBiggerThanCanvas(p5.height, border, entity.position.y, entity)) {
      entity.position.y = p5.height - border - entity.size / 2;
      entity.velocity.y *= -1 * entity.bounciness;
    }
  };

  const draw = (p5: any) => {
    p5.background(0);
    p5.noStroke();
    // if (p5.mouseIsPressed && !running) {
    //   if (
    //     !isXSmallerThanCanvas(border, p5.mouseX, entity) &&
    //     !isXBiggerThanCanvas(p5.width, border, p5.mouseX, entity) &&
    //     !isYSmallerThanCanvas(border, p5.mouseY, entity) &&
    //     !isYBiggerThanCanvas(p5.height, border, p5.mouseY, entity)
    //   ) {
    //     entity.position = new Vector({ x: p5.mouseX, y: p5.mouseY });
    //   }
    // }
    entities.forEach(entity => {
      applyPhysics(p5, entity);
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
    });
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
      <ForceInput toggleRunning={toggleRunning} />
    </div>
  );
};

export default ForceContainer;
