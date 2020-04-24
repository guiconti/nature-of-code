
import Entity from './Entity';

export default (width: number, border: number, x: number, entity: Entity) => {
  return x + entity.size / 2 >= width - border;
};