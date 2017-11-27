import merge from 'lodash/merge';

import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
} from '../actions/companies_actions';

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMPANIES:
      return merge({}, action.companies);
    case RECEIVE_COMPANY:
      const companies = merge({}, state);
      const company = {[action.company.id]: action.company};
      return merge({}, companies, company);
    default:
      return state;
  }
};

export default companiesReducer;
