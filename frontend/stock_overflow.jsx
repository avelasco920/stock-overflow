import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
  signup,
  login,
  logout
} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

  // testing...
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to StockOverflow</h1>, root);
});
