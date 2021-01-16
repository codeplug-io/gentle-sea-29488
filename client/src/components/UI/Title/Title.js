import React from "react";
// import classes from "./title-style.css";
import "./title-style.css";

const title = props => {
  return (
    <div className="TitleContainer">
      <div className="Title">
        <div className="TitleBig">{props.title}</div>
        <div className="TitleSmall">{props.children}</div>
      </div>
    </div>
  );
};

export default title;
