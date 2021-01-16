import React from "react";
import "./navItem-style.css";
// import classes from "./navItem-style.css";

const navItem = props => {
  return (
    <li className="NavigationItem">
      <a
        className={props.active ? "active" : null}
        href={props.link}
        onClick={props.clicked}
      >
        {props.children}
      </a>
    </li>
  );
};

export default navItem;
