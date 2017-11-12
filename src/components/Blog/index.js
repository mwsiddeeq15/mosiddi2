import React from 'react';
import { Blog } from './Blog';
import { connect } from 'react-redux';
import { getBlogPosts, saveBlogPost } from '../../store/actions/blogPosts.actions';

// Store properties that are being listened to
const mapStateToProps = (state) => {
  const { posts } = state.blogPosts;

  return {
    posts
  };
};

// Action creators
const mapDispatchToProps = {
  getBlogPosts,
  saveBlogPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
