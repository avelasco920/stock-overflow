import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading_icon';

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
          <StockIndexItem
            key={newsArticle.id}
            newsArticle={newsArticle} />
        )}
      </ul>
    );
  }
}

export default NewsIndex;
