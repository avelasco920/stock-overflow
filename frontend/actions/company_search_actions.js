import * as APIUtil from '../util/company_search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_NO_RESULTS = 'RECEIVE_NO_RESULTS';

const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

const receiveNoResults = () => ({
  type: RECEIVE_NO_RESULTS,
});

export const searchCompanyDatabase = query => (dispatch) => (
  APIUtil.searchCompanyDatabase(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);

export const clearSearchResults = query => (dispatch) => (
  dispatch(receiveNoResults())
);
