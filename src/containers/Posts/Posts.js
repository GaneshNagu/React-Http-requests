import React, { Component } from 'react';
import axios from "axios";
import Post from "../../components/Post/Post";
import classes from './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    newposts: [],
    postSelectedId: null,
    errorpostval: false

  };
  ClickedHandler = (keyval) => {
    console.log(keyval,'/posts/'+keyval)
    // this.setState({ postSelectedId: keyval });
    // this.props.history.push({pathname:keyval})
    // this.props.history.push({pathname:keyval})
    this.props.history.push('/posts/'+keyval);
    // console.log(this.props.history.push('/posts/'+keyval));

  };

  componentDidMount() {
     console.log(this.props)
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

    }).catch(error => {
      this.setState({ errorpostval: true })

    });

  }

  render() {

    let postsrnder = <p style={{ textAlign: "center" }} > Something went Wrong...! </p>

    if (!this.errorpostval) {
      postsrnder = this.state.posts.map((repvalue) => {
        return (
          // <Link to={'/'+repvalue.id} key={repvalue.id}>
          <Post title={repvalue.title}
          author={repvalue.author}
          key={repvalue.id}
          clicked={
            () => this.ClickedHandler(repvalue.id)
          }
        />
        // </Link>
        );
      });

    }


    return (
       <div>
      <section className={classes.Posts} >{postsrnder} </section>
      <Route path={this.props.match.url+"/:id"} component={FullPost} />
      </div>



    )



  }
}

export default Posts;