import React, { Component } from "react";
import Aux from "../../hoc/auxi";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
// import style from "./layout-style";
import Radium from "radium";
import Main from "../../components/Navigation/Main/Main";
import Footer from "../../components/Navigation/Footer/Footer";
import FooterContents from "../../components/FooterContents/Footer";

//NB: style={} will always overide className={} by default css rules
class Layout extends Component {
  state = {
    showSidedrawer: false,
    showSearch: false,
    theme: "neutral"
  };

  toggleSidedrawerHandler = () => {
    // const changeShow = this.state.showSidedrawer;
    this.setState(prevState => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };
  toggleSearchInput = () => {
    this.setState(prevState => {
      return { showSearch: !prevState.showSearch };
    });
  };
  toggleTheme = () => {
    this.setState(prevState => {
      if (prevState.theme === "dark") {
        return { theme: "light" };
      } else if (prevState.theme === "neutral") {
        return { theme: "dark" };
      } else if (prevState.theme === "light") {
        return { theme: "neutral" };
      }
    });
  };

  render() {
    // console.log(this.props.links.Home);
    // console.log(this.makeActive(this.state.links));
    return (
      <Aux>
        <Toolbar
          open={this.toggleSidedrawerHandler}
          search={this.state.showSearch}
          theme={this.state.theme}
          toggleS={this.toggleSearchInput}
          toggleT={this.toggleTheme}
          changePage={this.props.changePage}
          mainContent={this.props.mainContent}
        />
        <SideDrawer
          theme={this.state.theme}
          open={this.state.showSidedrawer}
          close={this.toggleSidedrawerHandler}
          changePage={this.props.changePage}
          mainContent={this.props.mainContent}
        />
        <Main theme={this.state.theme}>{this.props.children}</Main>
        <Footer>
          <FooterContents />
        </Footer>
      </Aux>
    );
  }
}

export default Radium(Layout);
