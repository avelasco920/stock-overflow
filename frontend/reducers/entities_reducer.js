import { combineReducers } from 'redux';

import companies from './companies_reducer';
import newsArticles from './news_articles_reducer';
import companySearch from './company_search_reducer';

const entitiesReducer = combineReducers({
  companies,
  newsArticles,
  companySearch,
});

export default entitiesReducer;
