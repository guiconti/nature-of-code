
import Entity from './Entity';

export default (border: number, y: number, entity: Entity) => {
  return y - entity.size / 2 <= border;
};