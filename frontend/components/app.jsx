import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './home_page/home_page.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar/navbar';

const App = () => (
  <div className="app-body">
    <Navbar />
    <div className="app-main">
      <HomePage />
      <ProtectedRoute path="/home" component={HomePage} />
    </div>
    <div className="body-test"></div>
  </div>
);

export default App;
