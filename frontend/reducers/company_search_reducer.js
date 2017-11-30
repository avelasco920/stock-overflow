import merge from 'lodash/merge';
import {
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_NO_RESULTS
} from '../actions/company_search_actions';

const companySearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.searchResults);
    case RECEIVE_NO_RESULTS:
      return {};
    default:
      return state;
  }
};


export default companySearchReducer;
