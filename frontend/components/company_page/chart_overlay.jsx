import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import { stringifyInteger } from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company } = this.props;
    console.log(company);
    return (
      <div className="chart-overlay">
        <div className="account-info">
          <h2>{company.name}</h2>
          <div className="delta">
            <h4>{stringifyInteger(company.market_price)}</h4>
          </div>
        </div>
        <div className="chart-history">
          <a>Today</a>
          <a>1W</a>
          <a>1M</a>
          <a>3M</a>
          <a>1Y</a>
          <a>5Y</a>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;
