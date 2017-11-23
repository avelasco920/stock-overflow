import React from 'react';
import { Provider } from 'react-redux';
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
  <div>
    <Navbar />
    <Switch>
    </Switch>
    <div className="body-test"></div>
  </div>
);

export default App;
