import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { a } from 'react-router-dom';

import { stringifyInteger } from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company } = this.props;
    const companyUrl = `/company/${company.symbol};`;
    console.log(company);
    return (
      <div className="chart-overlay">
        <div className="company-info">
          <h2>{company.name} Inc</h2>
          <h1>{stringifyInteger(company.market_price)}</h1>
          <div className="delta">
            <h4>+$7.01(+0.70%)</h4> <span>Today</span>
          </div>
        </div>
        <div className="chart-history-container">
          <div className="chart-history">
            <a>Today</a>
            <a>1W</a>
            <a>1M</a>
            <a>3M</a>
            <a>1Y</a>
            <a>5Y</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;




//
//
// <a>Today</a>
// <a>1W</a>
// <a>1M</a>
// <a>3M</a>
// <a>1Y</a>
// <a>5Y</a>
//
