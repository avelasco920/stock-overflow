import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading_icon';
import { timeAgo } from '../../util/parsing_functions';

class NewsArticleIndexItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { newsArticle, companyName } = this.props;
    const articleId = newsArticle.id;
    const companyUrl = `/company/${newsArticle.company_symbol}`;
    return (
      <li className="news-article-index-item">
        <a href={newsArticle.source}
          target="_blank">
          <img src={newsArticle.img_url}/>
        </a>
        <div className="news-text-area">
          <h4>{newsArticle.publisher} on <Link to={companyUrl} className="news-company">{companyName}</Link></h4>
          <a
            href={newsArticle.source}
            className="news-title"
            target="_blank">
            {newsArticle.title}
          </a>
          <div className="news-body-box">
            <span className="news-body">{newsArticle.body}</span>
          </div>
          <span className="news-date">{timeAgo(newsArticle.date)}</span>
        </div>
      </li>
    );
  }
}

export default NewsArticleIndexItem;
