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
  componentWillMount() {
    setTimeout(() => this.props.fetchCompanies(), 900);
    // this.props.symbols.forEach(symbol => this.props.fetchRealtimeIntradayData(symbol));
  }

  componentWillUnmount() {
    this.props.clearCompanies();
    this.props.clearRealtimeData();
  }

  render() {
    const { symbols, dataForChart, companies } = this.props;
    // const investedCompanies = Object.keys(dataForChart);
    // const filteredCompanies = investedCompanies.filter(symbol => (
    //   dataForChart[symbol]["intraday"]
    // ));
    // if (filteredCompanies.length < symbols.length) {
    //   return (<LoadingIcon />);
    // } else
    if (Object.values(companies).length === 0) {
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
