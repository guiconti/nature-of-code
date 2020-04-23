import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';

import configureStore from './index';

describe('Store', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary foo data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: FOO_EXAMPLE, payload: { value: 20 } },
      {
        type: FOO_ANOTHER_EXAMPLE,
        payload: { fieldName: 'anotherExample', value: 10 }
      }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      anotherExample: 10,
      example: 20
    };

    expect(actual.foo).toEqual(expected);
  });

  it('should display results when necessary bar data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: BAR_EXAMPLE, payload: { value: 1.5 } },
      {
        type: BAR_ANOTHER_EXAMPLE,
        payload: { fieldName: 'anotherExample', value: 1.5 }
      }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      example: 1.5,
      anotherExample: 1.5
    };

    expect(actual.bar).toEqual(expected);
  });
});
