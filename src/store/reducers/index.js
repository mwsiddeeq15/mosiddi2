import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducers = {
  blogPosts: require('./blogPosts.reducer.js')
};

module.exports = createStore(combineReducers(reducers), compose(applyMiddleware(thunkMiddleware)));
