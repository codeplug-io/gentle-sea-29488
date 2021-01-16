import React from "react";
// import classes from "./main-classes.css";
import "./main-classes.css";

const main = props => {
  let style = {};
  // let brightness = [];

  if (props.theme === "neutral") {
    // color: #ffffff //Brightness7
    style = {
      backgroundColor: "rgb(68 55 55)",
      color: "#ffffff"
    };
  } else if (props.theme === "dark") {
    //Brightness7
    style = {
      backgroundColor: "rgb(29 27 27)",
      color: "gray"
    };
  } else if (props.theme === "light") {
    //brightness4
    style = {
      backgroundColor: "rgb(233 235 239)",
      color: "gray"
    };
  }
  return (
    <main style={style} className="Main" theme={props.theme}>
      {props.children}
    </main>
  );
};

export default main;
