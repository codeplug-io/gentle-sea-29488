import React from "react";
// import classes from "./footer-classes.css";
import "./footer-classes.css";

const footer = props => {
  return <footer className="Footer">{props.children}</footer>;
};

export default footer;
