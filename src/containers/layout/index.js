import React from "react";
import Sidebar from "./../../components/sidebar/index";

const Layout = ({ children }) => (
  <div className="view-conteiner">
    <div className="conteiner">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
