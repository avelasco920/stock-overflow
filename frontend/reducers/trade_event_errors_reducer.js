import { combineReducers } from 'redux';
import { RECEIVE_TRADE_EVENT_ERRORS } from '../actions/trade_events_actions';
import { RESET_ERRORS } from '../actions/errors_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRADE_EVENT_ERRORS:
      return [action.errors];
    case RESET_ERRORS:
      return [];
    default:
      return state;
  }
};
