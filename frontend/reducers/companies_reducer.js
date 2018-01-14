import merge from 'lodash/merge';
import { convertCompanySymToId } from './selectors';
import { getSymbol, getPrices } from '../util/parsing_functions';
import { RECEIVE_TRADE_EVENT } from '../actions/trade_events_actions';
import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
  RECEIVE_REALTIME_DATA,
  RECEIVE_INTRADAY_DATA
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
      return state;
    case RECEIVE_TRADE_EVENT:
      companies = merge({}, state);
      company = {[action.payload.company.id]: action.payload.company};
      return merge({}, companies, company);
    case RECEIVE_WATCHLIST_ITEM:
      companies = merge({}, state);
      let companyId = action.company.company_id;
      companies[companyId].current_user_watching = action.watching;
      return merge({}, companies);
    // case RECEIVE_INTRADAY_DATA:
    //   const symbol = getSymbol(action.data);
    //   companyId = convertCompanySymToId(state, symbol);
    //   const prices = getPrices(action.data, "5min");
    //   const currentPrice = parseFloat(prices[prices.length - 1]);
    //   const updatedCompany = merge({}, state[companyId]);
    //   updatedCompany.market_price = currentPrice;
    //   return merge({}, state, {[updatedCompany.id]: updatedCompany});
    default:
      return state;
  }
};

export default companiesReducer;
