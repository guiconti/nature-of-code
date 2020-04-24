import Vector from './Vector';

export default class Entity {
  size: number;
  mass: number;
  velocity: Vector;
  position: Vector

  constructor(size: number, mass: number, velocity: Vector, position: Vector) {
    this.size = size;
    this.mass = mass;
    this.velocity = velocity;
    this.position = position;
  }
  applyForce(force: Vector) {
    //  F = m * a
    const acceleration = new Vector(force);
    acceleration.divide(this.mass);
    this.velocity.add(acceleration);
  }
}