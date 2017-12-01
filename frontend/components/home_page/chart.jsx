import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true",
      activeId: "1",
    };
  }

  componentDidMount() {
    const { activeId } = this.state;
    let initialActive = document.getElementById(activeId);
    initialActive.classList.add("chart-history-active");
  }

  changeActive(strNum) {
    const { activeId } = this.state;
    const url = `https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green${strNum}.png?raw=true`;
    let currentlyActive = document.getElementById(activeId);
    currentlyActive.classList.remove("chart-history-active");
    let newActive = document.getElementById(strNum);
    newActive.classList.add("chart-history-active");
    this.setState({ imgUrl: url, activeId: strNum });
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
            <a onClick={() => this.changeActive(1)} id="1">Today</a>
            <a onClick={() => this.changeActive(2)} id="2">1W</a>
            <a onClick={() => this.changeActive(3)} id="3">1M</a>
            <a onClick={() => this.changeActive(4)} id="4">3M</a>
            <a onClick={() => this.changeActive(5)} id="5">1Y</a>
            <a onClick={() => this.changeActive(6)} id="6">5Y</a>
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
