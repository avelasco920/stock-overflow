import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  componentWillMount() {
  }

  render() {
    const { user } = this.props;
    return (
      <div className="chart">
        <ChartOverlay user={user}/>
      </div>
    );
  }
}

export default Chart;
