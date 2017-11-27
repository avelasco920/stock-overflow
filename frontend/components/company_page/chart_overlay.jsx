import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { a } from 'react-router-dom';

import { stringifyInteger } from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  button () {
    // if this.props.user_watching?
    // return one type of button:
      // ex: will have "Add to Watch List" and onClick of watchCompany().
      // watch Company will POST watch. then ((id) => dispatch(receiveWatch(id, true)))
    // otherwise render other one
    return (
      <button className="follow follow-button">Follow Company</button>
    );
  }

  render() {
    const { company } = this.props;
    const companyUrl = `/company/${company.symbol};`;
    console.log(company);
    return (
      <div className="chart-overlay">
        <div className="company-info">
          <h2>{company.name}</h2>
          <h1>{stringifyInteger(company.market_price)}</h1>
          <div className="delta">
            <h4>+$7.01(+0.70%)</h4> <span>Today</span>
          </div>
        </div>
        {this.button()}
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
