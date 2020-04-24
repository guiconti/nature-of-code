
import Entity from './Entity';

export default (border: number, x: number, entity: Entity) => {
  return x - entity.size / 2 <= border;
};