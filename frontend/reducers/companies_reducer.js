import merge from 'loadsh/merge';

import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
} from '../actions/companies_actions';

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    switch(action.type) {
      case RECEIVE_COMPANIES:
        merge({}, state, {[entitites]: action.companies})
      case RECEIVE_COMPANY:

      default:
        return state;
    }
  }
}
