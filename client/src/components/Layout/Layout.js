import React from "react";
import Aux from "../../hoc/auxi";

const Layout = props => (
  <Aux>
    <div>toolbar ,sidebar ,backdropooo!</div>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
