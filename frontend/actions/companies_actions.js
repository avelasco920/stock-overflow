import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_COMPANIES = 'START_LOADING_ALL_COMPANIES';
export const START_LOADING_SINGLE_COMPANY = 'START_LOADING_SINGLE_COMPANY';
export const START_LOADING_INTRADAY_PRICES = 'START_LOADING_INTRADAY_PRICES';
export const START_LOADING_DAILY_PRICES = 'START_LOADING_DAILY_PRICES';
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_INTRADAY_DATA = 'RECEIVE_INTRADAY_DATA';
export const RECEIVE_DAILY_DATA = 'RECEIVE_DAILY_DATA';
export const RECEIVE_NO_DATA = 'RECEIVE_NO_DATA';

export const startLoadingAllCompanies = () => ({
  type: START_LOADING_ALL_COMPANIES
});

export const startLoadingSingleCompany = () => ({
  type: START_LOADING_SINGLE_COMPANY
});

export const startLoadingIntradayPrices = () => ({
  type: START_LOADING_INTRADAY_PRICES
});

export const startLoadingDailyPrices = () => ({
  type: START_LOADING_DAILY_PRICES
});

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const receiveIntradayData = data => ({
  type: RECEIVE_INTRADAY_DATA,
  data
});

export const receiveDailyData = (data, symbol) => ({
  type: RECEIVE_DAILY_DATA,
  data,
  symbol
});

export const receiveNoData = () => ({
  type: RECEIVE_NO_DATA,
});

export const clearCompanies = () => dispatch => (
  dispatch(receiveCompanies({}))
);

export const fetchCompanies = () => dispatch => {
  dispatch(startLoadingAllCompanies());
  return APIUtil.fetchCompanies()
    .then(companies => (
      dispatch(receiveCompanies(companies))
    )
  );
};

export const fetchCompany = id => dispatch => {
  dispatch(startLoadingSingleCompany());
  return APIUtil.fetchCompany(id)
    .then(company => (
      dispatch(receiveCompany(company))
    )
  );
};

export const fetchRealtimeIntradayData = sym => dispatch => {
  dispatch(startLoadingIntradayPrices());
  return APIUtil.fetchRealtimeIntradayData(sym)
    .then(data => (
      dispatch(receiveIntradayData(data))
    )
  );
};

export const fetchRealtimeDailyData = sym => dispatch => {
  dispatch(startLoadingDailyPrices());
  return APIUtil.fetchRealtimeDailyData(sym)
    .then(data => (
      dispatch(receiveDailyData(data, sym))
    )
  );
};

export const fetchRealtimeData = sym => {
  dispatch(fetchRealtimeDailyData(sym));
  dispatch(fetchRealtimeIntradayData(sym));
};

export const clearRealtimeData = () => dispatch => {
  dispatch(receiveNoData());
};
