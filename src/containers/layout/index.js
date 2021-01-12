import React from "react";
import { Route, Switch } from "react-router";
import Phones from "./../phones";

const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
);

const Layout = () => (
  <div className="view-conteiner">
    <div className="conteiner">
      <div className="row">
        <div className="col-md-3">Sidebar</div>
        <div className="col-md-9">{routes}</div>
      </div>
    </div>
  </div>
);

export default Layout;
