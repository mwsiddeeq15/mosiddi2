import { getBlogPostsAPI, saveBlogPostAPI } from '../api/blogPosts.api';

export const actionTypes = {
  GET_POSTS_REQUEST: 'blog/posts/GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: 'blog/posts/GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'blog/posts/GET_POSTS_ERROR',

  SAVE_POST_REQUEST: 'blog/posts/SAVE_POST_REQUEST',
  SAVE_POST_SUCCESS: 'blog/posts/SAVE_POST_SUCCESS',
  SAVE_POST_ERROR: 'blog/posts/SAVE_POST_ERROR'
};

export const getBlogPostsRequest = () => ({
  type: actionTypes.GET_POSTS_REQUEST
});
export const getBlogPostsSuccess = (payload) => ({
  type: actionTypes.GET_POSTS_SUCCESS,
  payload
});
export const getBlogPostsError = (payload) => ({
  type: actionTypes.GET_POSTS_ERROR,
  payload
});

export const getBlogPosts = (userId) => {
  return (dispatch) => {
    dispatch(getBlogPostsRequest());
    return getBlogPostsAPI(userId)
      .then((res) => {
        dispatch(getBlogPostsSuccess(res));
      })
      .catch((err) => {
        dispatch(getBlogPostsError(err));
        throw err;
      });
  }
};

export const saveBlogPostRequest = () => ({
  type: actionTypes.SAVE_POST_REQUEST
});
export const saveBlogPostSuccess = (payload) => ({
  type: actionTypes.SAVE_POST_SUCCESS,
  payload
});
export const saveBlogPostError = (payload) => ({
  type: actionTypes.SAVE_POST_ERROR,
  payload
});

export const saveBlogPost = (userId, blogPost) => {
  return (dispatch) => {
    dispatch(saveBlogPostRequest());
    return saveBlogPostAPI(userId, blogPost)
      .then((res) => {
        dispatch(saveBlogPostSuccess(res));
      })
      .catch((err) => {
        dispatch(saveBlogPostError(err));
        throw err;
      });
  }
};
