import React, { Component } from "react";
import Posts from '../Posts/Posts';

 
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../NewPost/NewPost";
import classes from "./Blog.css";

<<<<<<< HEAD
class Blog extends Component {
  state = {
    posts: [],
    newposts: [],
    postSelectedId: null,

    errorpostval: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.cypress.io/posts")
      .then((response) => {
        const slicedData = response.data.slice(0, 4);

        const newupdatedata = slicedData.map((temprout) => {
          return {
            ...temprout,
            author: "Nagu",
          };
        });

        this.setState({ posts: newupdatedata });
        console.log(this.state.posts);
      })
      .catch((error) => {
        this.setState({ errorpostval: true });
      });
  }

  ClickedHandler = (keyval) => {
    this.setState({ postSelectedId: keyval });
  };

  render() {
    let postsrnder = (
      <p style={{ textAlign: "center" }}>Something went Wrong...!</p>
    );

    if (!this.errorpostval) {
      postsrnder = this.state.posts.map((repvalue) => {
        return (
          <Post
            title={repvalue.title}
            key={repvalue.id}
            author={repvalue.author}
            clicked={() => this.ClickedHandler(repvalue.id)}
          />
        );
      });
    }

    // console.log(this.state.newposts);
    // console.log(this.state.postSelectedId);

    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">NewPost</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className={classes.Posts}>{postsrnder}</section>
=======



class Blog extends Component {
  
  render() {
   
    
    return (
      <div>
      <header className={classes.Navigion}>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/new-post'>New Post</a>
            </li>
          </ul>
          
        </nav>
      </header>
        
>>>>>>> bd100527727c03546aabe431b6ee1deb5160311f
        <section>
          <Posts/>
        </section>

        {/* <section>
          <FullPost
            // title={this.state.newposts.title}
            id={this.state.postSelectedId}  
            // author={this.state.newposts.author}
          />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
