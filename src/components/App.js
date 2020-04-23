/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Example from './pages/Example';
import Foo from './pages/Foo';
import Bar from './pages/Bar';
import NotFound from './pages/NotFound';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/example" activeStyle={activeStyle}>Example</NavLink>
          {' | '}
          <NavLink to="/foo" activeStyle={activeStyle}>Foo</NavLink>
          {' | '}
          <NavLink to="/bar" activeStyle={activeStyle}>Bar</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/example" component={Example} />
          <Route path="/foo" component={Foo} />
          <Route path="/bar" component={Bar} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
