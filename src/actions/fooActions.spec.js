import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import { getExample, getAnotherExample } from '../actions/fooActions';

const state = {
  example: '',
  anotherExample: '',
};

describe('Foo Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should use dispatch to send example object', async () => {
    const dispatch = jest.fn();
    const expected = {
      type: FOO_EXAMPLE,
      payload: {
        value: 'Example retrieved',
      },
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (getExample)).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    await getExample(state)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should return defined object on another example call', () => {
    const expected =  {
      type: FOO_ANOTHER_EXAMPLE,
      payload: {
        fieldName: 'anotherExample',
        value: 10,
      },
    };
    const actual = getAnotherExample(expected.payload.fieldName, expected.payload.value);

    expect(actual).toEqual(expected);
  });
});
