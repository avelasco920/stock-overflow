import * as APIUtil from '../util/company_search_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const searchCompanyDatabase = (query) => (dispatch) => (
  APIUtil.searchCompanyDatabase(query).then(
    (results) => dispatch(receiveSearchResults(results))
  )
);
