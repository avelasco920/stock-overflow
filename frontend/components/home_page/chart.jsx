import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green2.png?raw=true",
    };
  }

  changeImage(num) {
    const url = `https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green${num}.png?raw=true`;
    this.setState({imgUrl: url});
  }

  render() {
    const { user } = this.props;
    const { imgUrl } = this.state;
    return (
      <div className="chart">
        <div className="chart-overlay">
          <div className="account-info">
            <h2>${stringifyToFloat(user.portfolio_value)}</h2>
            <div className="delta">
              <h4>+$7.01(+0.70%)</h4> <span>Today</span>
            </div>
          </div>
          <div className="chart-history">
            <a onClick={() => this.changeImage(1)}>Today</a>
            <a onClick={() => this.changeImage(2)}>1W</a>
            <a onClick={() => this.changeImage(3)}>1M</a>
            <a onClick={() => this.changeImage(4)}>3M</a>
            <a onClick={() => this.changeImage(5)}>1Y</a>
            <a onClick={() => this.changeImage(6)}>5Y</a>
          </div>
        </div>
        <img
          src={imgUrl}
          className="chart-placeholder"/>
      </div>
    );
  }
}

export default Chart;
