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
    const { newsArticles, loading, companies, companiesLoading } = this.props;
    // console.log(`companies: ${companiesLoading}`);
    // console.log(`articles: ${loading}`);
    return (
      loading && companiesLoading ?
      <LoadingIcon /> :
        <ul className="news-articles-index">
        {newsArticles.map(newsArticle =>
          <NewsArticleIndexItem
            key={newsArticle.id}
            newsArticle={newsArticle}
            companyName={companies[newsArticle.company_id].name}/>
        )}
      </ul>
    );
  }
}

export default NewsIndex;
