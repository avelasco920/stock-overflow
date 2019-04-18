import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_COMPANIES = 'START_LOADING_ALL_COMPANIES';
export const START_LOADING_SINGLE_COMPANY = 'START_LOADING_SINGLE_COMPANY';
export const START_LOADING_INTRADAY_PRICES = 'START_LOADING_INTRADAY_PRICES';
export const START_LOADING_DAILY_PRICES = 'START_LOADING_DAILY_PRICES';
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
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

export const receiveStockPrices = data => ({
  type: RECEIVE_STOCK_PRICES,
  data
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

export const fetchIntradayStockPrices = (sym) => dispatch => {
  dispatch(startLoadingIntradayPrices());
  return APIUtil.fetchStockPrices(sym, 'intraday')
    .then(data => (
      dispatch(receiveStockPrices(data))
    )
  );
};

export const fetchDailyStockPrices = sym => dispatch => {
  dispatch(startLoadingDailyPrices());
  return APIUtil.fetchStockPrices(sym, 'daily')
    .then(data => (
      dispatch(receiveStockPrices(data, sym))
    )
  );
};

export const clearRealtimeData = () => dispatch => {
  dispatch(receiveNoData());
};
