import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cashier from '../Cashier';

const Routes = () => {
  return (
    <Switch>
      <Route path="/cashier">
        <Cashier />
      </Route>
      <Route path="/store">
        <h1>2</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
