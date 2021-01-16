import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Blog.css";
// import axios from "../../axios";

import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
// import classes from "./Blog.css";

const AsyncNewPost = asyncComponent(() => import("./NewPost/NewPost"));
// XMLHttpRequests
class Blog extends Component {
  //
  render() {
    //
    let title = "blog";
    if (!title) {
      title = this.props.title;
    }
    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="Active">
                All Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="Active"
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
// activeStyle={{color: 'red', margin: '0'}}
// this.props.match.url + "/new-post" relative path

// <Route path="/posts" exact render={() => <Posts />} />
// <Route path="/new-post" exact render={() => <NewPost />} />

// <section>
//   <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
//   <NewPost />
// </section>
