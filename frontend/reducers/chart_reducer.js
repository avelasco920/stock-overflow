import merge from 'lodash/merge';
import {
  RECEIVE_STOCK_PRICES,
  RECEIVE_NO_DATA,
} from '../actions/companies_actions';
import { parseData, parseDailyData } from '../util/parsing_functions';

const chartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK_PRICES:
      const { data: { symbol, last_closing_price, time_series, stock_prices } } = action;
      const parsedData = { [symbol]: { [time_series]: stock_prices, last_closing_price } };
      return merge({}, state, parsedData);
    case RECEIVE_NO_DATA:
      return {};
    default:
      return state;
  }
};

export default chartReducer;
parseData
