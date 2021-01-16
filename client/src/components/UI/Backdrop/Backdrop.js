import React from "react";

// import classes from "./backdrop-style.css";
import "./backdrop-style.css";

const backdrop = props =>
  props.show ? (
    <div className="Backdrop" onClick={props.clicked}></div>
  ) : null;
export default backdrop;
