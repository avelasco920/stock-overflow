import { combineReducers } from 'redux';

import companies from './companies_reducer';
import newsArticles from './news_articles_reducer';

const entitiesReducer = combineReducers({
  companies,
  newsArticles,
});

export default entitiesReducer;
