import * as APIUtil from '../util/watchlist_api_util';

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

export const watchCompany = id => dispatch => {
  return APIUtil.watchCompany(id)
    .then(companies => (
      dispatch(receiveCompanies(companies))
    )
  );
};

export const unwatchCompany = id => dispatch => {
  return APIUtil.unwatchCompany(id)
    .then(company => (
      dispatch(receiveCompany(company))
    )
  );
};
