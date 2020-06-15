import React, { Component } from 'react';
import axios from "axios";
import Post from "../../components/Post/Post";
import classes from './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    newposts: [],
    postSelectedId: null,
    errorpostval: false

  };
  ClickedHandler = (keyval) => {
    this.setState({ postSelectedId: keyval });

  };

  componentDidMount() {
    // console.log(this.props)
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
          <Link to={'/'+repvalue.id} key={repvalue.id}>
          <Post title={repvalue.title}
          author={repvalue.author}
          clicked={
            () => this.ClickedHandler(repvalue.id)
          }
        />
        </Link>
        );
      });

    }


    return (
      // <div>
      <section className={classes.Posts} >{postsrnder} </section>
      // </div>


    )



  }
}

export default Posts;