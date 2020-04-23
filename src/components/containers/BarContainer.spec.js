import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BarContainer from './BarContainer';
import BarText from '../elements/bar/BarText';
import initialState from '../../reducers/initialState';
import * as actions from '../../actions/barActions';

const mockStore = configureMockStore([thunk]);

describe('<BarContainer />', () => {
  it('should contain <BarText />', () => {
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <BarContainer />
      </Provider>
    );

    expect(wrapper.find(BarText).length).toEqual(2);
  });

  it('calls getExample upon loading', () => {
    const store = mockStore(initialState);
    jest.spyOn(actions, 'getExample');

    mount(
      <Provider store={store}>
        <BarContainer />
      </Provider>
    );

    expect(actions.getExample).toHaveBeenCalledWith('A delayed example');
    expect(actions.getExample).toHaveBeenCalledTimes(1);
  });

  it('calls getAnotherExample upon loading', () => {
    const store = mockStore(initialState);
    jest.spyOn(actions, 'getAnotherExample');

    mount(
      <Provider store={store}>
        <BarContainer />
      </Provider>
    );

    expect(actions.getAnotherExample).toHaveBeenCalledWith(
      'anotherExample',
      'A not delayed example'
    );
    expect(actions.getAnotherExample).toHaveBeenCalledTimes(1);
  });
});
