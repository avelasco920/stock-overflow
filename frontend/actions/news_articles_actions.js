import * as APIUtil from '../util/news_articles_api_util';

export const START_LOADING_NEWS_ARTICLES = 'START_LOADING_ALL_NEWS_ARTICLES';
export const RECEIVE_NEWS_ARTICLES = 'RECEIVE_NEWS_ARTICLES';
export const RECEIVE_NEWS_ARTICLE = 'RECEIVE_NEWS_ARTICLE';

export const startLoadingNewsArticles = () => ({
  type: START_LOADING_NEWS_ARTICLES
});

export const receiveNewsArticles = newsArticles => ({
  type: RECEIVE_NEWS_ARTICLES,
  newsArticles
});

export const receiveNewsArticle = newsArticle => ({
  type: RECEIVE_NEWS_ARTICLE,
  newsArticle
});

export const fetchNewsArticles = () => dispatch => {
  dispatch(startLoadingNewsArticles());
  return APIUtil.fetchNewsArticles()
    .then(newsArticles => (
      dispatch(receiveNewsArticles(newsArticles))
    )
  );
};

export const incrementCount = id => dispatch => {
  return APIUtil.incrementCount(id)
    .then(newsArticle => (
      dispatch(receiveNewsArticle(newsArticle))
    )
  );
};
