import React, { Component } from "react";
import classes from "./FullPost.css";
import axios from "axios";
import Loader from "react-loader-spinner";
// import posts from '../Posts/Posts';

class FullPost extends Component {
  state = {
    loadeddata: null,
  };

  componentDidMount() {
     console.log("from full postjs",this.props);
    this.LoadData();
  }

    componentDidUpdate(){
      this.LoadData();
    }

    LoadData(){
      if (this.props.match.params.id) {
        if (
          !this.state.loadeddata ||
          (this.state.loadeddata && this.state.loadeddata.id !== +this.props.match.params.id)
        ) {
          axios
            .get("https://jsonplaceholder.cypress.io/posts/" + this.props.match.params.id)
            .then((response) => {
              this.setState({ loadeddata: response.data });
              console.log(this.state.loadeddata);
            }).catch(error=>{
              console.log(error);
            });
        }
      }
    }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.match.params.id) {

           post = <Loader type="BallTriangle" style={{ textAlign: "center" }} color="#2b24b5" height={80} width={80} />;

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
