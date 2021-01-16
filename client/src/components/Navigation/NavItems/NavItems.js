import React from "react";
// import classes from "./navItems-style.css";
import "./navItems-style.css";

import NavItem from "./NavItem/NavItem";
// import { Home, Person } from "@material-ui/icons";

const navItems = props => {
  // toggle() {
  //
  // }
  // let linksRender = [];
  // const makeActive = () => {
  //   linksRender = [];
  //
  //   links.map((link, i) => {
  //     if (link[i]) {
  //       linksRender.push(
  //         <NavItem onClick={() => makeActive()} link="/" active>
  //           {link[i]}
  //         </NavItem>
  //       );
  //     } else {
  //       linksRender.push(
  //         <NavItem onClick={() => makeActive()} link="/hub">
  //           link[i]
  //         </NavItem>
  //       );
  //     }
  //   });
  //
  //   return linksRender;
  // };

  // console.log(makeActive());
  // console.log(props.mainContent);
  //
  return (
    <ul className="NavigationItems">
      {" "}
      <NavItem
        clicked={() => props.changePage("homepage")}
        active={props.mainContent === "homepage" ? true : false}
      >
        Home
      </NavItem>
      <NavItem
        clicked={() => props.changePage("users")}
        active={props.mainContent === "users" ? true : false}
      >
        Users
      </NavItem>
      <NavItem
        clicked={() => props.changePage("blog")}
        active={props.mainContent === "blog" ? true : false}
      >
        Blog
      </NavItem>
      <NavItem
        clicked={() => props.changePage("counter")}
        active={props.mainContent === "counter" ? true : false}
      >
        Counter
      </NavItem>
    </ul>
  );
};

//outsourcing links in their individual component
export default navItems;
