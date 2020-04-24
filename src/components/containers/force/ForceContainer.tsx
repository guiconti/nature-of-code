import React from 'react';
import Canvas from '../../elements/shared/Canvas';
import Button from '../../elements/shared/Button';
// import Input from '../../elements/shared/Input';
import Entity from '../../../utils/Entity';
import Vector from '../../../utils/Vector';
import Color from '../../../utils/Color';
import isXSmallerThanCanvas from '../../../utils/isXSmallerThanCanvas';
import isXBiggerThanCanvas from '../../../utils/isXBiggerThanCanvas';
import isYSmallerThanCanvas from '../../../utils/isYSmallerThanCanvas';
import isYBiggerThanCanvas from '../../../utils/isYBiggerThanCanvas';

const ForceContainer = () => {
  let entities: Array<Entity> = [];
  let running = false;
  const amountOfEntities = 5;
  const maxSize = 60;
  const minSize = 20;
  const maxBounciness = 0.95;
  const minBounciness = 0.9;
  const border = 5;
  const maxForce = 2000;
  const gravity = new Vector({ x: 0, y: 0.3 });

  const toggleRunning = () => {
    running = !running;
  };

  const setup = (p5: any, parentRef: any) => {
    p5.createCanvas(800, 500).parent(parentRef);
    p5.frameRate(60);
    p5.noStroke();
    const { height, width } = p5;
    for (let i = 0; i < amountOfEntities; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      const bounciness = Math.random() * (maxBounciness - minBounciness) + minBounciness;
      const minPositionX = border + size / 2;
      const maxPositionX = width - border - size / 2;
      const minPositionY = border + size / 2;
      const maxPositionY = height - border - size / 2;
      entities[i] = new Entity(
        size,
        size,
        bounciness,
        new Color(
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          0.6
        ),
        new Vector({ x: 0, y: 0 }),
        new Vector({
          x: Math.floor(Math.random() * (maxPositionX - minPositionX) + minPositionX),
          y: Math.floor(Math.random() * (maxPositionY - minPositionY) + minPositionY),
        })
      );
      let force = new Vector({
        x: Math.floor(Math.random() * maxForce - maxForce),
        y: Math.floor(Math.random() * maxForce - maxForce),
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
    p5.stroke(255);
    entities.forEach(entity => {
      applyPhysics(p5, entity);
      p5.fill(entity.color.formatted());
      p5.circle(entity.position.x, entity.position.y, entity.size);
      p5.strokeWeight(2);
      p5.line(
        entity.position.x,
        entity.position.y,
        entity.position.x + entity.velocity.x * 10,
        entity.position.y + entity.velocity.y * 10
      );
    });
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
      <div className='force-input'>
        <Button onClick={toggleRunning}>Start/Stop</Button>
        {/* <Input placeholder='Max force' value={maxForce} onChange={onForceChange} /> */}
      </div>
    </div>
  );
};

export default ForceContainer;
