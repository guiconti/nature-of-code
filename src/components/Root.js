import React, { Component } from 'react';
import configureStore, { history } from '../store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
const store = configureStore();
import App from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
