import React from "react";
// import classes from "./logo-style.css";
import "./logo-style.css";

const logoLink = props => (
  <div className="Logo">
    <a href={props.href}>
      <img src={props.src} alt={props.alt} />
    </a>
  </div>
);

export default logoLink;
