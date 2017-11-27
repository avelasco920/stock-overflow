import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading_icon';

class NewsArticleIndexItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { newsArticle, companyName } = this.props;
    const articleId = newsArticle.id;
    return (
      <li className="news-article-index-item">
        <a href={newsArticle.source}
          target="_blank"
          onClick={(articleId) => this.props.incrementCount(articleId)}>
          <img src={newsArticle.img_url}/>
        </a>
        <div className="news-text-area">
          <h4>{newsArticle.publisher} on <span className="news-company">{companyName}</span></h4>
          <a
            href={newsArticle.source}
            className="news-title"
            target="_blank"
            onClick={(articleId) => this.props.incrementCount(articleId)}>
            {newsArticle.title}
          </a>
          <div className="news-body-box">
            <span className="news-body">{newsArticle.body}</span>
          </div>
          <div className="news-views">
            <i className="fa fa-eye" aria-hidden="true"/>
            <span> {newsArticle.views}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default NewsArticleIndexItem;
