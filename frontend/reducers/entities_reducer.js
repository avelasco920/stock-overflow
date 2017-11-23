import { combineReducers } from 'redux';

import companies from './companies_reducer';
import user from './user_reducer';
import newsArticles from './news_articles_reducer';

const entitiesReducer = combineReducers({
  companies,
  user,
  newsArticles,
});

export default entitiesReducer;
