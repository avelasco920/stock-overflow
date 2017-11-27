import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Navbar from './navbar/navbar';
import HomePage from './home_page/home_page';
import CompanyPageContainer from './company_page/company_page_container';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchCompanies();
  }

  render() {
    if (Object.values(this.props.companies).length === 0) {
      return null;
    } else {
      return (
        <div className="app-body">
          <Navbar />
          <div className="app-main">
            <Switch>
            <ProtectedRoute exact path="/company/:symbol" component={CompanyPageContainer} />
            <ProtectedRoute path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}


export default App;
