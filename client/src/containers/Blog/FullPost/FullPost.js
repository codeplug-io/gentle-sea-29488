import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";
// import classes from "./FullPost.css";

import Spinner from "../../../components/UI/Spinner/Spinner";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      //
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then(response => {
          this.setState({ loadedPost: response.data });
        });
      }
      //
    }
  }
  //
  deletePostHandler = () => {
    // console.log("was clicked");
    axios.delete("/posts/" + this.props.match.params.id).then(res => {
      // console.log(res.data);
      this.setState({ loadedPost: res.data });
      this.props.history.goBack();
    });
  };
  //
  render() {
    let post = <Spinner />;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    // console.log(this.state.loadedPost);
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
