import React from 'react';
import Canvas from '../../elements/shared/Canvas';
import Entity from '../../../utils/Entity';
import Vector from '../../../utils/Vector';
import isXSmallerThanCanvas from '../../../utils/isXSmallerThanCanvas';
import isXBiggerThanCanvas from '../../../utils/isXBiggerThanCanvas';
import isYSmallerThanCanvas from '../../../utils/isYSmallerThanCanvas';
import isYBiggerThanCanvas from '../../../utils/isYBiggerThanCanvas';

export interface CollisionContainerProps {
  width: number;
  height: number;
  border: number;
  gravity: Vector;
  entities: Array<Entity> | null;
  showDirectionLines: boolean;
  running: boolean;
}

const CollisionContainer = ({
  width,
  height,
  border,
  gravity,
  entities,
  showDirectionLines,
  running,
}: CollisionContainerProps) => {
  const setup = (p5: any, parentRef: any) => {
    p5.createCanvas(width, height).parent(parentRef);
    p5.frameRate(60);
    p5.noStroke();
  };

  const applyPhysics = (entity: Entity, index: number) => {
    if (!running) {
      return;
    }
    move(entity);
    collisions(entity, index);
  };

  const move = (entity: Entity) => {
    entity.velocity.add(gravity);
    entity.position.add(entity.velocity);

    if (isXSmallerThanCanvas(border, entity.position.x, entity)) {
      entity.position.x = border + entity.size / 2;
      entity.velocity.x *= -1 * entity.bounciness;
    } else if (isXBiggerThanCanvas(width, border, entity.position.x, entity)) {
      entity.position.x = width - border - entity.size / 2;
      entity.velocity.x *= -1 * entity.bounciness;
    }
    if (isYSmallerThanCanvas(border, entity.position.y, entity)) {
      entity.position.y = border + entity.size / 2;
      entity.velocity.y *= -1 * entity.bounciness;
    } else if (isYBiggerThanCanvas(height, border, entity.position.y, entity)) {
      entity.position.y = height - border - entity.size / 2;
      entity.velocity.y *= -1 * entity.bounciness;
    }
  };

  const collisions = (entity: Entity, index: number) => {
    if (!entities) {
      return;
    }
    for (let i = index + 1; i < entities.length; i++) {
      const distanceX = entities[i].position.x - entity.position.x;
      const distanceY = entities[i].position.y - entity.position.y;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const minDistance = entities[i].size / 2 + entity.size / 2;
      if (distance < minDistance) {
        const angle = Math.atan2(distanceY, distanceX);
        const targetX = entity.position.x + Math.cos(angle) * minDistance;
        const targetY = entity.position.y + Math.sin(angle) * minDistance;
        const accelerationX = targetX - entities[i].position.x;
        const accelerationY = targetY - entities[i].position.y;
        entity.velocity.x -=
          accelerationX *
          entity.bounciness *
          (entities[i].mass / entity.mass);
        entity.velocity.y -=
          accelerationY *
          entity.bounciness *
          (entities[i].mass / entity.mass);
        entities[i].velocity.x +=
          accelerationX *
          entities[i].bounciness * 
          (entity.mass / entities[i].mass);
        entities[i].velocity.y +=
          accelerationY *
          entities[i].bounciness *
          (entity.mass / entities[i].mass);;
      }
    }
  };

  const draw = (p5: any) => {
    p5.background(0);
    p5.stroke(255);
    if (!entities) {
      return;
    }
    entities.forEach((entity: Entity, index: number) => {
      applyPhysics(entity, index);
      p5.fill(entity.color.formatted());
      p5.circle(entity.position.x, entity.position.y, entity.size);
      p5.strokeWeight(2);
      if (showDirectionLines) {
        p5.line(
          entity.position.x,
          entity.position.y,
          entity.position.x + entity.velocity.x * 10,
          entity.position.y + entity.velocity.y * 10
        );
      }
    });
  };

  return (
    <div>
      <Canvas setup={setup} draw={draw} />
    </div>
  );
};

export default CollisionContainer;
