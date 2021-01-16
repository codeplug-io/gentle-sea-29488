import React from "react";
import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
// import classes from "./search-classes.css";
import "./search-classes.css";
import Radium from "radium";
import Aux from "../../hoc/auxi";
// import SearchModule from "./SearchModule";

const core = props => {
  // class SearchModule {
  //   //1. describe and create/initiate our object
  //
  //   constructor() {
  //     //
  //     // this.head = {};
  //     this.showSearch = props.search;
  //     this.search = "input || modal class";
  //   }
  //   //2. events
  //   // on this.head feels cold, wearsHat;
  //   events() {
  //     if (this.showSearch) {
  //       this.openModal();
  //     } else {
  //       this.closeModal();
  //     }
  //   }
  //
  //   //3. methods (function, action..)
  //   wearsHat() {
  //     //
  //   }
  //   openModal() {
  //     props.openModal = true;
  //     //implement no scroll
  //     props.modalContents = {};
  //   }
  //   closeModal() {
  //     props.openModal = true;
  //     //implement no scroll
  //   }
  // }
  // SearchModule();
  // var liveSearch = new SearchModule();

  return (
    <Aux>
      <Search
        style={{
          focused: {
            backgroundColor: "red"
          }
        }}
        disableUnderline={true}
        href="#"
        data-tool-tip="quick search"
        className="SearchIcon"
        onClick={() => props.toggleS()}
      />

      <Input
        autoFocus={true}
        placeholder="Search..."
        style={
          props.search
            ? { display: "inline-flex", direction: "ltr" }
            : { display: "none" }
        }
        className="InputCore"
      />
    </Aux>
  );
};

export default Radium(core);
