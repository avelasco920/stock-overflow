import merge from 'lodash/merge';
import {
  RECEIVE_MINUTE_DATA,
  RECEIVE_DAILY_DATA
} from '../actions/companies_actions';
import { parseRealData } from '../util/parsing_functions';

const chartReducer = (state = {}, action) => {
  Object.freeze(state);
  let parsedData;
  switch(action.type) {
    case RECEIVE_MINUTE_DATA:
      parsedData = parseRealData(action.data, "1min");
      return merge({}, state, parsedData);
    case RECEIVE_DAILY_DATA:
      parsedData = parseRealData(action.data, "Daily");
      let m = merge({}, state, parsedData);
      return m;
    default:
      return state;
  }
};

export default chartReducer;
