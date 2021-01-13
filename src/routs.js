import React from "react";
import { Route, Switch } from "react-router";
import Phones from "containers/phones";
import Phone from "containers/phone";

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/phones/:id" component={Phone} exact />
  </Switch>
);