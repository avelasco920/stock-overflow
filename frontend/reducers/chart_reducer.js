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
      const { data: {
        symbol,
        last_closing_price_before_most_recent_trading_day,
        stock_prices_for_one_day, stock_prices_for_one_week,
        stock_prices_for_one_month,
        stock_prices_for_three_months,
        stock_prices_for_one_year
      } } = action;
      const parsedData = { [symbol]: {
        last_closing_price_before_most_recent_trading_day,
        stock_prices_for_one_day, stock_prices_for_one_week,
        stock_prices_for_one_month,
        stock_prices_for_three_months,
        stock_prices_for_one_year
      }};
      return merge({}, state, parsedData);
    case RECEIVE_NO_DATA:
      return {};
    default:
      return state;
  }
};

export default chartReducer;
parseData
