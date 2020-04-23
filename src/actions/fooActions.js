import { FOO_FETCH_EXAMPLE, FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';

export function getExample(value) {
  return {
    type: FOO_FETCH_EXAMPLE,
    payload: {
      value,
    },
  };
}

export function receiveExample(value) {
  return {
    type: FOO_EXAMPLE,
    payload: {
      value,
    },
  };
}

export function getAnotherExample(fieldName, value) {
  return {
    type: FOO_ANOTHER_EXAMPLE,
    payload: {
      fieldName,
      value,
    },
  };
}
