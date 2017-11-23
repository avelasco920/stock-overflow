import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  signup,
  login,
  logout
} from './actions/session_actions';
import { fetchCompanies, fetchCompany } from './actions/companies_actions';

document.addEventListener('DOMContentLoaded', () => {

  // testing...
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchCompanies = fetchCompanies;
  window.fetchCompany = fetchCompany;
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
  ReactDOM.render(<Root store={store}/>, root);
});
