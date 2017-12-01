import merge from 'lodash/merge';
import { RECEIVE_TRADE_EVENT } from '../actions/trade_events_actions';
import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
  RECEIVE_REALTIME_DATA
} from '../actions/companies_actions';
import {
  RECEIVE_WATCHLIST_ITEM,
  REMOVE_WATCHLIST_ITEM,
} from '../actions/watchlist_actions';

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMPANIES:
      return merge({}, action.companies);
    case RECEIVE_COMPANY:
      let companies = merge({}, state);
      let company = {[action.company.id]: action.company};
      return merge({}, companies, company);
    case RECEIVE_REALTIME_DATA:
      debugger;
    case RECEIVE_TRADE_EVENT:
      companies = merge({}, state);
      company = {[action.payload.company.id]: action.payload.company};
      return merge({}, companies, company);
    case RECEIVE_WATCHLIST_ITEM:
      companies = merge({}, state);
      let companyId = action.company.company_id;
      companies[companyId].current_user_watching = action.watching;
      return merge({}, companies);
    default:
      return state;
  }
};

export default companiesReducer;
