import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartContainer from './chart_container';
import NewsArticlesIndexContainer from './news_articles_index_container';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ChartContainer />
        <NewsArticlesIndexContainer />
      </div>
    );
  }
}

export default MainContent;
