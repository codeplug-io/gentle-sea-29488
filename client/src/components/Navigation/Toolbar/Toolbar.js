import React from "react";
// import classes from "./toolbar-style.css";
import "./toolbar-style.css";
import LogoLink from "../../Logo/LogoLink";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Languages from "../../Languages/Languages";
// import SearchBtnInpt from "../../Search/Search";
import burgerLogo from "../../../assets/images/burgerLogo.png";
// import { classConcat } from "../../../assets/functions";
import WithClass from "../../../hoc/WithClasses";
import { Brightness4, Brightness7 } from "@material-ui/icons";

const toolbar = props => {
  let style = {};
  // let brightness = [];

  if (props.theme === "neutral") {
    // color: #ffffff //Brightness7
    style = {
      backgroundColor: "#736464",
      color: "#ffffff"
    };
  } else if (props.theme === "dark") {
    //Brightness7
    style = {
      backgroundColor: "#333333",
      color: "gray"
    };
  } else if (props.theme === "light") {
    //brightness4
    style = {
      backgroundColor: "#67b964",
      color: "#f2f2f2"
    };
  }
  // console.log(props.links.Home);
  return (
    <header style={style} className="Toolbar">
      <DrawerToggle open={props.open}>
        <div></div>
        <div></div>
        <div></div>
      </DrawerToggle>
      <div className="Logo">
        <LogoLink href="/" src={burgerLogo} alt="VastAgriLogo" />
      </div>

      <nav className="DesktopOnly">
        <NavItems
          changePage={props.changePage}
          mainContent={props.mainContent}
        />
      </nav>

      <div className="ToolbarEnd">
        {/*<div className="SearchBtnInpt">
          <SearchBtnInpt search={props.search} toggleS={props.toggleS} />
        </div>*/}
        <div>
          <WithClass className="Languages">
            <Languages href="/" />
          </WithClass>
        </div>
        {props.theme === "light" ? (
          <Brightness4
            className="Brightness"
            onClick={() => props.toggleT()}
          />
        ) : (
          <Brightness7
            className="Brightness"
            onClick={() => props.toggleT()}
          />
        )}
      </div>
    </header>
  );
};

export default toolbar;
