import React from "react";
import MaterialUiTest from "../../components/MaterialUiTest/MaterialUiTest";
// import classes from "./homepage-classes.css";
import "./homepage-classes.css";

const homepage = props => {
  let title = "Homepage";
  if (!title) {
    title = props.title;
  }

  return (
    <div className="Posts">
      <section>
        <h4 style={{ textAlign: "center" }}>{title}</h4>
        <MaterialUiTest renderThis={null} />
      </section>
    </div>
  );
};

export default homepage;
