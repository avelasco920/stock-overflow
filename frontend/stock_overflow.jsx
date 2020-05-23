import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  signup,
  login,
  logout
} from './actions/session_actions';
import {
  clearSessionErrors
} from './actions/errors_actions';

import {
  selectCurrentCompany,
  selectInvestedCompanies,
  selectWatchingCompanies,
  selectNewsArticles,
} from './reducers/selectors';

import {
  fetchCompanies,
  fetchCompany,
  fetchStockPrices,
} from './actions/companies_actions';
import { parseRealData } from './util/parsing_functions';
import { watchCompany, unwatchCompany } from './actions/watchlist_actions';
import { makeTrade } from './actions/trade_events_actions';
import {
  fetchNewsArticles,
  incrementCount
} from './actions/news_articles_actions';
import {
  searchCompanyDatabase,
  clearSearchResults
} from './actions/company_search_actions';

document.addEventListener('DOMContentLoaded', () => {

  // testing...
  window.fetchStockPrices = fetchStockPrices;
  //

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
