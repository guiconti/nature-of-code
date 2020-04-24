/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Force from './pages/Force';
import Collision from './pages/Collision';
import NotFound from './pages/NotFound';
import React from 'react';
import { hot } from 'react-hot-loader';
import { HOME, FORCE, COLLISION } from '../constants/endpoints';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={COLLISION} component={Collision} />
        <Route exact path={FORCE} component={Force} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
