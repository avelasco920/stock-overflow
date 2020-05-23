import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_COMPANIES = 'START_LOADING_ALL_COMPANIES';
export const START_LOADING_SINGLE_COMPANY = 'START_LOADING_SINGLE_COMPANY';
export const START_LOADING_STOCK_PRICES = 'START_LOADING_STOCK_PRICES';
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

export const startLoadingStockPrices = () => ({
  type: START_LOADING_STOCK_PRICES
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

export const fetchStockPrices = (sym) => dispatch => {
  dispatch(startLoadingStockPrices());
  return APIUtil.fetchStockPrices(sym)
    .then(data => (
      dispatch(receiveStockPrices(data))
    )
  );
};

export const clearRealtimeData = () => dispatch => {
  dispatch(receiveNoData());
};
