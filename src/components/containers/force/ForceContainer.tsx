import React from 'react';
import Canvas from '../../elements/shared/Canvas';
import Entity from '../../../utils/Entity';
import Vector from '../../../utils/Vector';
import isXSmallerThanCanvas from '../../../utils/isXSmallerThanCanvas';
import isXBiggerThanCanvas from '../../../utils/isXBiggerThanCanvas';
import isYSmallerThanCanvas from '../../../utils/isYSmallerThanCanvas';
import isYBiggerThanCanvas from '../../../utils/isYBiggerThanCanvas';

export interface ForceContainerProps {
  width: number;
  height: number;
  border: number;
  gravity: Vector;
  entities: Array<Entity> | null;
  running: boolean;
}

const ForceContainer = ({ width, height, border, gravity, entities, running }: ForceContainerProps) => {

  const setup = (p5: any, parentRef: any) => {
    p5.createCanvas(width, height).parent(parentRef);
    p5.frameRate(60);
    p5.noStroke();
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
    if (!entities) {
      return;
    }
    entities.forEach((entity: Entity) => {
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
    </div>
  );
};

export default ForceContainer;
