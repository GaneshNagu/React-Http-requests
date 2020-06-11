import React, { Component } from "react";
import Posts from '../Posts/Posts';

 
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../NewPost/NewPost";
import classes from "./Blog.css";




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
