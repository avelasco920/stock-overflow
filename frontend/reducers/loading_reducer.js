import merge from 'lodash/merge';

import {
  RECEIVE_COMPANIES,
  RECEIVE_COMPANY,
  RECEIVE_STOCK_PRICES,
  START_LOADING_ALL_COMPANIES,
  START_LOADING_SINGLE_COMPANY,
  START_LOADING_STOCK_PRICES,
} from '../actions/companies_actions';

import {
  RECEIVE_NEWS_ARTICLES,
  START_LOADING_NEWS_ARTICLES,
} from '../actions/news_articles_actions';

const initialState = {
  indexLoading: true,
  detailLoading: true,
  articlesLoading: true,
  stockPricesLoading: true,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMPANIES:
      return merge({}, state, { indexLoading: false });
    case RECEIVE_COMPANY:
      return merge({}, state, { detailLoading: false });
    case START_LOADING_ALL_COMPANIES:
      return merge({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_COMPANY:
      return merge({}, state, { detailLoading: true });
    case RECEIVE_NEWS_ARTICLES:
      return merge({}, state, { articlesLoading: false });
    case START_LOADING_NEWS_ARTICLES:
      return merge({}, state, { articlesLoading: true });
    case START_LOADING_STOCK_PRICES:
      return merge({}, state, { stockPricesLoading: true });
    case RECEIVE_STOCK_PRICES:
      if (action.data) return merge({}, state, { stockPricesLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;
