import React from "react";
// import classes from "./drawer-style.css";
import "./drawer-style.css";


const drawerToggle = props => (
  <div className="DrawerToggle" onClick={props.open}>
    {props.children}
  </div>
);

export default drawerToggle;
