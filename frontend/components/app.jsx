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
import LoadingIcon from './loading_icon';
import HomePage from './home_page/home_page';
import AccountPage from './account_page/account_page';
import CompanyPageContainer from './company_page/company_page_container';
import { fetchRealtimeData } from '../actions/companies_actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivedCompanies: []
    };
  }

  componentWillMount() {
    this.props.fetchCompanies();
    this.props.symbols.forEach(symbol => fetchRealtimeData(symbol));
  }

  componentWillUnmount() {
    this.props.clearCompanies();
    this.props.clearRealtimeData();
    console.log("unmounting");
  }

  arrivedData(chartData) {
    const symbols = Object.keys(chartData);
    const companies = symbols.filter(symbol => (
      Object.values(chartData[symbol]).length === 2
    ));
    this.state = {
      arrivedCompanies: companies
    };
  }

  render() {
    const { symbols, chartData, companies } = this.props;
    console.log(this.state.arrivedCompanies);
    this.arrivedData(chartData);
    if (this.state.arrivedCompanies.length < symbols.length) {
      return (<LoadingIcon />);
    } else if (Object.values(companies).length === 0) {
      return (<LoadingIcon />);
    } else {
      return (
        <div className="app-body">
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/company/:symbol" component={CompanyPageContainer} />
            <ProtectedRoute path="/account" component={AccountPage} />
            <ProtectedRoute path="/" component={HomePage} />
          </Switch>
        </div>
      );
    }
  }
}


export default App;
