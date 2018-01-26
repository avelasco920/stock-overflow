import merge from 'lodash/merge';
import {
  RECEIVE_INTRADAY_DATA,
  RECEIVE_DAILY_DATA,
  RECEIVE_NO_DATA,
} from '../actions/companies_actions';
import { parseRealData, convertIntrinioResultToArray } from '../util/parsing_functions';

const chartReducer = (state = {}, action) => {
  Object.freeze(state);
  let parsedData;
  switch(action.type) {
    case RECEIVE_INTRADAY_DATA:
      parsedData = parseRealData(action.data, "5min");
      return merge({}, state, parsedData);
    case RECEIVE_DAILY_DATA:
      parsedData = convertIntrinioResultToArray(action.data.data, action.symbol);
      return merge({}, state, parsedData);
    case RECEIVE_NO_DATA:
      return {};
    default:
      return state;
  }
};

export default chartReducer;
