import React, { Component } from "react";
import axios from "../../../axios";
// import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./posts-classes.css";
// import classes from "./posts-classes.css";
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../NewPost/NewPost";

class Posts extends Component {
  state = {
    posts: [],

    error: false
  };
  /* selectedPostId: null,*/

  //
  componentDidMount() {
    // console.log(this.props);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState(prevState => {
          const posts = response.data.slice(0, 6);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: "Godwin"
            };
          });
          return { posts: updatedPosts };
        });
        // console.log(response);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error); //or update ui
      });
  }

  //
  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/" + id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong..!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            clicked={id => this.postSelectedHandler(post.id)}
            title={post.title}
            key={post.id}
            author={post.author}
          />
          // </Link>
        );
      });
    }
    return <section className="posts">{posts}</section>;
  }
}

export default Posts;
