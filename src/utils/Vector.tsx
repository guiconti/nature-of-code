export interface VectorType{
  x: number;
  y: number;
}

export default class Vector {
  x: number;
  y: number;

  constructor({ x, y }: VectorType) {
    this.x = x;
    this.y = y;
  }
  add(vectorToBeAdded: VectorType | number) {
    if (typeof vectorToBeAdded === 'number') {
      vectorToBeAdded = new Vector({ x: vectorToBeAdded, y: vectorToBeAdded });
    }
    this.x += vectorToBeAdded.x;
    this.y += vectorToBeAdded.y;
  }
  reduce(vectorToBeReduced: VectorType | number) {
    if (typeof vectorToBeReduced === 'number') {
      vectorToBeReduced = new Vector({ x: vectorToBeReduced, y: vectorToBeReduced });
    }
    this.x -= vectorToBeReduced.x;
    this.y -= vectorToBeReduced.y;
  }
  divide(vectorToBeDivided: VectorType | number) {
    if (typeof vectorToBeDivided === 'number') {
      vectorToBeDivided = new Vector({ x: vectorToBeDivided, y: vectorToBeDivided });
    }
    this.x /= vectorToBeDivided.x;
    this.y /= vectorToBeDivided.y;
  }
}