import React from "react";
// import classes from "./button-style.css";
import "./button-style.css";

const button = props => (
  <button
    className={["Button", classes[props.btnType]].join(" ")}
    onClick={props.click}
  >
    {props.children}
  </button>
);

export default button;
