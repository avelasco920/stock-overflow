import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartContainer from './chart_container';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { companySymbol } = this.props;
    return (
      <div className="main-content">
        <ChartContainer companySymbol={companySymbol} />
      </div>
    );
  }
}

export default MainContent;
