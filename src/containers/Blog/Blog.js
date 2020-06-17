import React, { Component } from "react";
import Posts from '../Posts/Posts';
import { withRouter } from 'react-router-dom';


// import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import classes from "./Blog.css";
import { Route, NavLink,Switch } from 'react-router-dom';
// import post from "../../components/Post/Post";

class Blog extends Component {
  state = {
  }

 
  render() {
    return (
      <div className={classes.Blog}>
        <header className={classes.Navigion}>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts/" activeStyle={{color:'#fa923f', textDecoration:'underline'}}>Home</NavLink>
              </li>
              <li>
                <NavLink exact to={{
                  pathname: this.props.match.url + 'new-post'
                }}> New Post </NavLink>
              </li>
            </ul>

          </nav>
        </header>
       
        
        {/* <Route path='/' exact component={FullPost} /> */}
        <Switch> 
        <Route path='/new-post' component={NewPost} />
        <Route path='/posts' component={Posts} />
        </Switch>
        

        
      </div>
    );
  }
}

export default withRouter(Blog);
