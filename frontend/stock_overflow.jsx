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
  fetchRealtimeIntradayData,
  fetchRealtimeDailyData
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
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchCompanies = fetchCompanies;
  window.fetchCompany = fetchCompany;
  window.fetchRealtimeIntradayData = fetchRealtimeIntradayData;
  window.fetchRealtimeDailyData = fetchRealtimeDailyData;
  window.selectInvestedCompanies = selectInvestedCompanies;
  window.selectWatchingCompanies = selectWatchingCompanies;
  window.fetchNewsArticles = fetchNewsArticles;
  window.incrementCount = incrementCount;
  window.selectNewsArticles = selectNewsArticles;
  window.selectCurrentCompany = selectCurrentCompany;
  window.watchCompany = watchCompany;
  window.unwatchCompany = unwatchCompany;
  window.makeTrade = makeTrade;
  window.clearSessionErrors = clearSessionErrors;
  window.searchCompanyDatabase = searchCompanyDatabase;
  window.clearSearchResults = clearSearchResults;
  window.parseRealData = parseRealData;
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
