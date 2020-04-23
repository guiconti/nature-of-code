import { BAR_FETCH_EXAMPLE, BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';

export function getExample(value) {
  return {
    type: BAR_FETCH_EXAMPLE,
    payload: {
      value,
    },
  };
}

export function receiveExample(value) {
  return {
    type: BAR_EXAMPLE,
    payload: {
      value,
    },
  };
}

export function getAnotherExample(fieldName, value) {
  return {
    type: BAR_ANOTHER_EXAMPLE,
    payload: {
      fieldName,
      value,
    }
  };
}
