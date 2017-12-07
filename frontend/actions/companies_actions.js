import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_COMPANIES = 'START_LOADING_ALL_COMPANIES';
export const START_LOADING_SINGLE_COMPANY = 'START_LOADING_SINGLE_COMPANY';
export const START_LOADING_MINUTE_API = 'START_LOADING_MINUTE_API';
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_MINUTE_DATA = 'RECEIVE_MINUTE_DATA';
export const RECEIVE_DAILY_DATA = 'RECEIVE_DAILY_DATA';
export const RECEIVE_NO_DATA = 'RECEIVE_NO_DATA';

export const startLoadingAllCompanies = () => ({
  type: START_LOADING_ALL_COMPANIES
});

export const startLoadingSingleCompany = () => ({
  type: START_LOADING_SINGLE_COMPANY
});

export const startLoadingMinuteApi = () => ({
  type: START_LOADING_MINUTE_API
});

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const receiveMinuteData = data => ({
  type: RECEIVE_MINUTE_DATA,
  data
});

export const receiveDailyData = data => ({
  type: RECEIVE_DAILY_DATA,
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

export const fetchRealtimeIntradayData = sym => dispatch => {
  dispatch(startLoadingMinuteApi());
  return APIUtil.fetchRealtimeIntradayData(sym)
    .then(data => (
      dispatch(receiveMinuteData(data))
    )
  );
};

export const fetchRealtimeDailyData = sym => dispatch => {
  return APIUtil.fetchRealtimeDailyData(sym)
    .then(data => (
      dispatch(receiveDailyData(data))
    )
  );
};

export const fetchRealtimeData = sym => dispatch => {
  dispatch(fetchRealtimeDailyData(sym));
  dispatch(fetchRealtimeIntradayData(sym));
};

export const clearRealtimeData = () => dispatch => {
  dispatch(receiveNoData());
};
