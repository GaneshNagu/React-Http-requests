import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.css';
import axios from 'axios';


class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(response => {

            const slicedData = response.data.slice(0, 20);

            const newupdatedata = slicedData.map(temprout => {
                return {
                    ...temprout,
                    author: 'Nagu'
                }
            });

            this.setState({ posts: newupdatedata })
            // console.log(response);
        })
    }



    render() {

        const postsrnder = this.state.posts.map(repvalue => {
            return (
                <Post title={repvalue.title} url={repvalue.url} key={repvalue.id} author={repvalue.author} />
            )
        })

        return (
            <div>
                <section className={classes.Posts}>
                    {postsrnder}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;