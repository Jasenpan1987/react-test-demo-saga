import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { status as Statuses } from "./constants";
import { fetchPosts } from "./actions"

class PostsComp extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPostList = () => {
    const { postList, status } = this.props.posts;
    if (status === Statuses.PENDING) {
      return (<h3>Loading...</h3>);
    }

    return (
      <ul>
        {postList.map(post => {
          return (
            <li key={post.id}>{post.title}</li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Post List</h3>
        { this.renderPostList() }
      </div>
    )
  }
}

export const Posts = connect(
  state => ({ posts: state.posts }),
  dispatch => bindActionCreators({ fetchPosts }, dispatch)
)(PostsComp);
