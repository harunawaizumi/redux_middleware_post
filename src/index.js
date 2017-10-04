import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route exact path="/posts/:id" component={PostsShow} />
                <Route exact path="/" component={PostsIndex} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));



// BrowserRouter: to change history which is good to keep the same uri
// Router: to decide which component to be rendered when you don't care the history
// path='/' is the same as no slash

// Switch: show ONLY ONE Route
// Route: show ALL matching Route

// Routeはどのパスの時にどのコンポーネントを表示するかのただのリスト
// Order of Route is important because it matches from the top
