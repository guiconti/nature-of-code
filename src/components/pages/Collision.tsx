import React, { useState, useEffect } from 'react';
import Header from '../elements/shared/Header';
import CollisionContainer from '../containers/collision/CollisionContainer';
import Entity from '../../utils/Entity';
import Vector from '../../utils/Vector';
import Color from '../../utils/Color';
import Button from '../elements/shared/Button';
import Input from '../elements/shared/Input';
import Checkbox from '../elements/shared/Checkbox';
import './styles/page.scss';

const Collision = () => {
  const [running, setRunning] = useState(false);
  const [amountOfEntities, setAmountOfEntities] = useState(3);
  const [entities, setEntities] = useState<Array<Entity> | null>(null);
  const [maxSize, setMaxSize] = useState(200);
  const [minSize, setMinSize] = useState(60);
  const [maxMass] = useState(1);
  const [minMass] = useState(0.6);
  const [maxBounciness, setMaxBounciness] = useState(0.7);
  const [minBounciness, setMinBounciness] = useState(0.4);
  const [maxForce, setMaxForce] = useState(200);
  const [gravity, setGravity] = useState(new Vector({ x: 0, y: 0.3 }));
  const [width, setWidth] = useState(800);
  const [showDirectionLines, setShowDirectionLines] = useState(true);
  const height = 600;
  const border = 5;

  const handleWindowSize = () => {
    if (window.innerWidth <= 768) {
      setWidth(300);
    } else {
      setWidth(800);
    }
  };

  useEffect(() => {
    handleWindowSize();
    window.addEventListener('resize', handleWindowSize);
  }, []);

  const onAmountOfEntitiesChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setAmountOfEntities(event.target.value);
  };

  const onMaxSizeChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setMaxSize(event.target.value);
  };

  const onMinSizeChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setMinSize(event.target.value);
  };

  const onMaxBouncinessChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setMaxBounciness(event.target.value);
  };

  const onMinBouncinessChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setMinBounciness(event.target.value);
  };

  const onForceChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setMaxForce(event.target.value);
  };

  const onGravityXChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setGravity(
      new Vector({
        x: event.target.value,
        y: gravity.y,
      })
    );
  };

  const onGravityYChange = (event: any) => {
    if (!event || !event.target) {
      return;
    }
    setGravity(
      new Vector({
        x: gravity.x,
        y: event.target.value,
      })
    );
  };

  const onShowDirectionLinesChange = () => {
    setShowDirectionLines(!showDirectionLines);
  };

  const toggleRunning = () => {
    setRunning(!running);
    if (running) {
      return;
    }
    setGravity(
      new Vector({
        x: parseFloat(String(gravity.x)),
        y: parseFloat(String(gravity.y)),
      })
    );

    let newEntities: Array<Entity> = [];
    for (let i = 0; i < amountOfEntities; i++) {
      const size =
        Math.floor(Math.random() * (parseInt(String(maxSize)) - parseInt(String(minSize)))) +
        parseInt(String(minSize));
      const bounciness =
        Math.random() * (parseFloat(String(maxBounciness)) - parseFloat(String(minBounciness))) +
        parseFloat(String(minBounciness));
      const minPositionX = border + size / 2;
      const maxPositionX = width - border - size / 2;
      const minPositionY = border + size / 2;
      const maxPositionY = height - border - size / 2;
      newEntities[i] = new Entity(
        size,
        minMass + (maxMass - minMass) / (parseInt(String(maxSize)) / size),
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
        x: Math.floor(Math.random() * parseInt(String(maxForce)) - parseInt(String(maxForce))),
        y: Math.floor(Math.random() * parseInt(String(maxForce)) - parseInt(String(maxForce))),
      });
      newEntities[i].applyForce(force);
    }
    setEntities(newEntities);
  };

  return (
    <main>
      <Header>Collision</Header>
      <CollisionContainer
        width={width}
        height={height}
        border={border}
        gravity={gravity}
        entities={entities}
        showDirectionLines={showDirectionLines}
        running={running}
      />
      <div className='form'>
        <Button onClick={toggleRunning}>Start/Stop</Button>
        {!running && (
          <div className='inputs'>
            <Input
              label='Amount of Entities'
              placeholder='Amount of entities'
              value={amountOfEntities}
              onChange={onAmountOfEntitiesChange}
            />
            <Input
              label='Max size'
              placeholder='Max size'
              value={maxSize}
              onChange={onMaxSizeChange}
            />
            <Input
              label='Min size'
              placeholder='Min size'
              value={minSize}
              onChange={onMinSizeChange}
            />
            <Input
              label='Max bounciness'
              placeholder='Max bounciness'
              value={maxBounciness}
              onChange={onMaxBouncinessChange}
            />
            <Input
              label='Min bounciness'
              placeholder='Min bounciness'
              value={minBounciness}
              onChange={onMinBouncinessChange}
            />
            <Input
              label='Max force'
              placeholder='Max force'
              value={maxForce}
              onChange={onForceChange}
            />
            <Input
              label='Gravity X'
              placeholder='Gravity X'
              value={gravity.x}
              onChange={onGravityXChange}
            />
            <Input
              label='Gravity Y'
              placeholder='Gravity Y'
              value={gravity.y}
              onChange={onGravityYChange}
            />
            <Checkbox
              label='Show direction lines'
              checked={showDirectionLines}
              onChange={onShowDirectionLinesChange}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Collision;
