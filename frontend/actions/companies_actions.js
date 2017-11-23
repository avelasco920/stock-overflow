import * as APIUtil from '../util/companies_api_util';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const fetchCompanies = () => dispatch => (
  APIUtil.fetchCompanies()
    .then(companies => (
      dispatch(receiveCompanies(companies))
    )
  )
);

export const fetchCompany = id => dispatch => (
  APIUtil.fetchCompany(id)
    .then(company => (
      dispatch(receiveCompanies(company))
    )
  )
);
