import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import { RECEIVE_WATCHLIST_ITEM } from '../actions/watchlist_actions';
import { RECEIVE_TRADE_EVENT } from '../actions/trade_events_actions';

const defaultState = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, {currentUser});
    case RECEIVE_WATCHLIST_ITEM:
      const oldState = merge({}, state);
      const user = merge({}, state.currentUser);
      let companiesWatching = user.companies_watching;
      const companyId = action.company.company_id;
      if (action.watching === true) {
        companiesWatching.push(companyId);
      } else {
        let index = companiesWatching.indexOf(companyId);
        companiesWatching.splice(index, 1);
      }
      return merge({}, {currentUser: user});
    case RECEIVE_TRADE_EVENT:
      currentUser = action.payload.user;
      return merge({}, {currentUser});
    default:
      return state;
  }
};

export default sessionReducer;
