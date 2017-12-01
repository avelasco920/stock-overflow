import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import AppContainer from './app_container';
import LoginPage from './login_page/login_page';
import SignupPage from './signup_page/signup_page';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginPage} />
        <AuthRoute path="/signup" component={SignupPage} />
        <ProtectedRoute path="/" component={AppContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
