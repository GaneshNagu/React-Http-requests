import React, { Component } from "react";
import Posts from '../Posts/Posts';
import { withRouter } from 'react-router-dom';


// import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import classes from "./Blog.css";
import { Route, Link } from 'react-router-dom';

class Blog extends Component {
  state = {
  }

  componentDidMount() {
    console.log(this.props)
  }



  render() {
    return (
      <div>
        <header className={classes.Navigion}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: this.props.match.url + 'new-post'
                }}> New Post </Link>
              </li>
            </ul>

          </nav>
        </header>

        <Route path='/' exact component={Posts} />
        {/* <Route path='/' exact component={FullPost} /> */}

        <Route path='/new-post' component={NewPost} />



        {/* <section>
          <Posts/>
        </section> */}

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

export default withRouter(Blog);
