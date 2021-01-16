import React, { PureComponent } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
// import classes from "./sideDrawer-style.css";
import "./sideDrawer-style.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/auxi";
import burgerLogo from "../../../assets/images/burgerLogo.png";

// let ATTACHED_CLASSES = [classes.SideDrawer, classes.Close];
let ATTACHED_CLASSES = ["SideDrawer", "Close"];

class SideDrawer extends PureComponent {
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     this.props.open === !nextProps.open ||
  //     this.props.mainContent === !nextProps.mainContent
  //   );
  // }
  //
  // UNSAFE_componentWillUpdate() {
  //   if (!this.props.open) {
  //    return ATTACHED_CLASSES = [classes.SideDrawer, classes.Open];
  //      this.props.mainContent;
  //   }
  //
  //   ATTACHED_CLASSES = [classes.SideDrawer, classes.CloseAnime];
  //   return this.props.mainContent;
  // }
  //
  render() {
    if (this.props.open) {
      ATTACHED_CLASSES = ["SideDrawer", "Open"];
    } else {
      ATTACHED_CLASSES = ["SideDrawer", "CloseAnime"];
    }


    //...
    let style = {};
    // let brightness = [];

    if (this.props.theme === "neutral") {
      // color: #ffffff //Brightness7
      style = {
        backgroundColor: "#736464",
        color: "#ffffff"
      };
    } else if (this.props.theme === "dark") {
      //Brightness7
      style = {
        backgroundColor: "#333333",
        color: "gray"
      };
    } else if (this.props.theme === "light") {
      //brightness4
      style = {
        backgroundColor: "#67b964",
        color: "#f2f2f2"
      };
    }
    return (
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.close} />
        <div style={style} className={ATTACHED_CLASSES.join(" ")}>
          <div className="Logo">
            <Logo src={burgerLogo} alt="burgerLogo" />
          </div>
          <nav>
            <NavItems
              changePage={this.props.changePage}
              mainContent={this.props.mainContent}
            />
          </nav>
        </div>
      </Aux>
    );
  }
}

export default SideDrawer;
