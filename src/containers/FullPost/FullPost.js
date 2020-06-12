import React, { Component } from "react";
import Loader from 'react-loader-spinner';

import classes from "./FullPost.css";
import axios from "axios";
import Loader from "react-loader-spinner";

class FullPost extends Component {
  state = {
    loadeddata: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadeddata ||
        (this.state.loadeddata && this.state.loadeddata.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.cypress.io/posts/" + this.props.id)
          .then((response) => {
            this.setState({ loadeddata: response.data });
            console.log(this.state.loadeddata);
          });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
<<<<<<< HEAD:src/components/FullPost/FullPost.js
      post = (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          style={{ textAlign: "center" }}
        />
      );
=======
      post = <Loader type="BallTriangle" style={{ textAlign: "center" }} color="#2b24b5" height={80} width={80} />;
>>>>>>> bd100527727c03546aabe431b6ee1deb5160311f:src/containers/FullPost/FullPost.js
    }

    if (this.state.loadeddata) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadeddata.title}</h1>
          <p>{this.state.loadeddata.body}</p>
          <div className={classes.Edit}>
            <button className={classes.Delete}>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
