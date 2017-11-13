import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/reducers';
import { Home, Login, Blog, Playground } from './views';

const AppContainer = (props) => (
  <div>{ props.children }</div>
);

const Test = (props) => (
    <div>TEST 1 2 3</div>
);

const routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={ AppContainer }>
        <IndexRoute component={ Home } />
        <Route path="blog" component={ Blog }/>
        <Route path="playground" component={ Playground }/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.body);
