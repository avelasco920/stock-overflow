import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_COMPANIES = 'START_LOADING_ALL_COMPANIES';
export const START_LOADING_SINGLE_COMPANY = 'START_LOADING_SINGLE_COMPANY';
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_REALTIME_DATA = 'RECEIVE_REALTIME_DATA';

export const startLoadingAllCompanies = () => ({
  type: START_LOADING_ALL_COMPANIES
});

export const startLoadingSingleCompany = () => ({
  type: START_LOADING_SINGLE_COMPANY
});

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const receiveRealtimeData = data => ({
  type: RECEIVE_REALTIME_DATA,
  data
});

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

export const fetchRealtimeData = sym => dispatch => {
  return APIUtil.fetchRealtimeData(sym)
    .then(data => (
      dispatch(receiveRealtimeData(data))
    )
  );
};
