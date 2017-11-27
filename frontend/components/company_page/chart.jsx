import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  render() {
    const { loading, company } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="chart">
          <ChartOverlay company={company}/>
          <img
            src="https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true"
            className="chart-placeholder"/>
        </div>
      );
    }
  }
}

export default Chart;
