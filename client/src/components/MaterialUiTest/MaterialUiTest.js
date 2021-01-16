import React from "react";
import Core from "./Core/Core";
import Fonts from "./Fonts/Fonts";

const materialUiTest = props => {
  let renderThis;
  if (props.renderThis === "core") {
    renderThis = <Core />;
  } else {
    renderThis = <Fonts />;
  }
  return <div>{renderThis}</div>;
};

export default materialUiTest;
