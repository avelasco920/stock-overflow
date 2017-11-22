import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

//containers
import App from './app';
import LoginPageContainer from './login_page/login_page_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginPageContainer} />
        <ProtectedRoute path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
