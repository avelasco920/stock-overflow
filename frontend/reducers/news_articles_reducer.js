import merge from 'lodash/merge';

import {
  RECEIVE_NEWS_ARTICLES,
  RECEIVE_NEWS_ARTICLE,
} from '../actions/news_articles_actions';

const newsArticlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEWS_ARTICLES:
      return merge({}, action.newsArticles);
    case RECEIVE_NEWS_ARTICLE:
      let newsArticles = merge({}, state);
      const newsArticle = action.newsArticle;
      return merge({}, newsArticles, {[newsArticle.id]: newsArticle});
    default:
      return state;
  }
};

export default newsArticlesReducer;
