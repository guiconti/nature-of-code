import React from 'react';
import configureStore, { history } from '../store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
const store = configureStore();
import App from './App';

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
