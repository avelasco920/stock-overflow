import * as APIUtil from '../util/companies_api_util';

export const START_LOADING_ALL_NEWS_ARTICLES = 'START_LOADING_ALL_NEWS_ARTICLES';
export const START_LOADING_SINGLE_NEWS_ARTICLE = 'START_LOADING_SINGLE_NEWS_ARTICLE';
export const RECEIVE_NEWS_ARTICLES = 'RECEIVE_NEWS_ARTICLES';
export const RECEIVE_NEWS_ARTICLE = 'RECEIVE_NEWS_ARTICLE';

export const startLoadingAllNewsArticles = () => ({
  type: START_LOADING_ALL_NEWS_ARTICLES
});

export const startLoadingSingleNewsArticle = () => ({
  type: START_LOADING_SINGLE_NEWS_ARTICLE
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
  dispatch(startLoadingAllNewsArticles());
  return APIUtil.fetchNewsArticles()
    .then(newsArticles => (
      dispatch(receiveNewsArticles(newsArticles))
    )
  );
};

export const fetchNewsArticle = id => dispatch => {
  dispatch(startLoadingSingleNewsArticle());
  return APIUtil.fetchNewsArticle(id)
    .then(newsArticle => (
      dispatch(receiveNewsArticle(newsArticle))
    )
  );
};
