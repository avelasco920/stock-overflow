import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

const NewsArticleIndexItem = ({ newsArticle }) => {
  return (
    <li className="news-article-index-item">
      <h2> {newsArticle.title} </h2>
    </li>
  );
};

export default NewsArticleIndexItem;
