import { actionTypes } from '../actions/blogPosts.actions';

const defaultState = {
  loading: false,
  error: false,
  posts: []
};

module.exports = (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.GET_POSTS_SUCCESS:
      const { posts } = action.payload;

      return {
        ...state,
        loading: false,
        error: false,
        posts
      };

    case actionTypes.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };


    case actionTypes.SAVE_POST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.SAVE_POST_SUCCESS:
      // const { posts } = action.payload;

      return {
        ...state,
        // loading: false,
        // error: false,
        // posts
      };

    case actionTypes.SAVE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};
