import { combineReducers } from 'redux';

import companies from './companies_reducer';
import newsArticles from './news_articles_reducer';
import companySearch from './company_search_reducer';
import chart from './chart_reducer';

const entitiesReducer = combineReducers({
  chart,
  companies,
  newsArticles,
  companySearch,
});

export default entitiesReducer;
