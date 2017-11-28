import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlayContainer from './chart_overlay_container';

class Chart extends React.Component {
  render() {
    const { loading, company } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="chart">
          <ChartOverlayContainer />
          <img
            src="https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true"
            className="chart-placeholder"/>
        </div>
      );
    }
  }
}

export default Chart;
