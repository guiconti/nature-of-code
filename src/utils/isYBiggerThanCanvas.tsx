
import Entity from './Entity';

export default (height: number, border: number, y: number, entity: Entity) => {
  return y + entity.size / 2 >= height - border;
};