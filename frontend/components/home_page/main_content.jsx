import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartContainer from './chart_container';
import NewsIndexContainer from './news_index_container';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ChartContainer />
        <NewsIndexContainer />
      </div>
    );
  }
}

export default MainContent;
