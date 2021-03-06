import React from "react";
import { Route, Switch } from "react-router";

import Phones from "containers/phones";
import Phone from "containers/phone";
import Basket from "containers/basket";

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/basket" component={Basket} />
  </Switch>
);
