import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';
import reducer from './barReducer';
import initialState from './initialState';

describe('Reducers Bar', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = initialState.bar;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle BAR_EXAMPLE', () => {
    const action = { type: BAR_EXAMPLE, payload: { value: 'Test example' } };
    const expected = Object.assign(initialState.bar, {
      example: action.payload.value
    });

    expect(reducer(initialState.bar, action)).toEqual(expected);
  });

  it('should handle BAR_ANOTHER_EXAMPLE', () => {
    const action = {
      type: BAR_ANOTHER_EXAMPLE,
      payload: {
        fieldName: 'anotherExample',
        value: 30,
      },
    };

    const expectedAnotherExample = 30;

    expect(reducer(initialState.bar, action).anotherExample).toEqual(
      expectedAnotherExample
    );
  });
});
