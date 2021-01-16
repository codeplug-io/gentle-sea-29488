import { connect } from "react-redux";

class Search {
  //1. describe and create/initiate our object

  constructor() {
    //
    // this.head = {};
    this.toggleSearch = "this.props.toggleS";
    this.search = "input || modal class";
  }
  //2. events
  // on this.head feels cold, wearsHat;
  events() {
    if (this.toggleSearch) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  //3. methods (function, action..)
  // wearsHat() {
  //
  // }
  openModal() {}
  closeModal() {}
}

//
// export default connect()(Search);
export default Search;
