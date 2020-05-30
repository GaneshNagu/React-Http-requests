import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import classes from "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    newposts: [],
    postSelectedId: null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.cypress.io/posts").then((response) => {
      const slicedData = response.data.slice(0, 4);

      const newupdatedata = slicedData.map((temprout) => {
        return {
          ...temprout,
          author: "Nagu",
        };
      });

      this.setState({ posts: newupdatedata });
      console.log(this.state.posts);
    });
  }

  ClickedHandler = (keyval) => {
    this.setState({ postSelectedId: keyval });

    // const newtempposts = {
    //   ...this.state.posts,
    // };
    // const newupdatedvalue = newtempposts[keyval - 1];

    // this.setState({newposts: newupdatedvalue, postSelectedId: keyval});
  };

  render() {
    const postsrnder = this.state.posts.map((repvalue) => {
      return (
        <Post
          title={repvalue.title}
          key={repvalue.id}
          author={repvalue.author}
          clicked={() => this.ClickedHandler(repvalue.id)}
        />
      );
    });

    // console.log(this.state.newposts);
    // console.log(this.state.postSelectedId);

    return (
      <div>
        <section className={classes.Posts}>{postsrnder}</section>
        <section>
          <FullPost
            // title={this.state.newposts.title}
            id={this.state.postSelectedId}
            // author={this.state.newposts.author}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
