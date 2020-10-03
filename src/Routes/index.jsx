import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cashier from '../Cashier';
import Shop from "../Shop";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cashier">
        <Cashier />
      </Route>
      <Route path="/store">
        <Shop/>
      </Route>
    </Switch>
  );
};

export default Routes;
