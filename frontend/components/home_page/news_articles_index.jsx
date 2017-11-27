import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading_icon';
import NewsArticleIndexItem from './news_article_index_item';

class NewsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchNewsArticles();
  }

  render() {
    const { newsArticles, loading } = this.props;
    return (
      loading ?
      <LoadingIcon /> :
        <ul className="news-articles-index">
          {newsArticles.map(newsArticle =>
            <NewsArticleIndexItem
              key={newsArticle.id}
              newsArticle={newsArticle}
              companyName={newsArticle.company_name}
            />
        )}
      </ul>
    );
  }
}


export default NewsIndex;
