import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';
import Chart from 'chart.js';

import PortfolioContainer from './portfolio_container';
import AccountFormContainer from './account_form_container';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const stocksCtx = document.getElementById("stocksChart");
    new Chart(stocksCtx, {
      type: 'doughnut',
        data: {
          datasets: [{
              data: [this.props.user.cash_value, this.props.user.stocks_value],
              labels: ['cash','stocks'],
              borderWidth: 0,
              backgroundColor: ["#f7f7f7", "#08d093"]
          }],
        },
        options: {
          cutoutPercentage: 93,
        }
    });
    const cashCtx = document.getElementById("cashChart");
    new Chart(cashCtx, {
      type: 'doughnut',
        data: {
          datasets: [{
              data: [this.props.user.cash_value, this.props.user.stocks_value],
              labels: ['cash','stocks'],
              borderWidth: 0,
              backgroundColor: ["#08d093", "#f7f7f7"]
          }],
        },
        options: {
          cutoutPercentage: 93,
        }
    });
  }

  render () {
    const { user } = this.props;
    const portfolioDesc = "Portfolio Value represents the total value of all the holdings in your account, including cash.";
    const buyingPowerDesc = "Buying power represents the total value of stocks you can purchse.";
    return (
      <div className="portfolio">
        <div className="account-value">
          <span className="account-text account-title">PORTFOLIO VALUE</span>
          <h1>${stringifyToFloat(user.portfolio_value)}</h1>
          <span className="account-text">{portfolioDesc}</span>
        </div>
        <div className="donut-charts">
          <div className="account-chart-container" id="stocks-div">
            <div className="stocks-detail">
              <h3>${stringifyToFloat(user.stocks_value)}</h3>
              <span className="account-text account-title">STOCKS</span>
            </div>
            <canvas id="stocksChart" className="donut-chart"></canvas>
          </div>
          <div className="account-chart-container" id="cash-div">
            <div className="stocks-detail">
              <h3>${stringifyToFloat(user.cash_value)}</h3>
              <span className="account-text account-title">CASH</span>
            </div>
            <canvas id="cashChart" className="donut-chart"></canvas>
          </div>
        </div>
        <div className="account-value" id="buying-power">
          <span className="account-text account-title">BUYING POWER</span>
          <h1>${stringifyToFloat(user.cash_value)}</h1>
          <span className="account-text">{buyingPowerDesc}</span>
        </div>
        <div className="cash-breakdown" id="withdrawable-cash">
          <span className="account-text account-title">WITHDRAWABLE CASH</span>
          <h3>${stringifyToFloat(user.cash_value)}</h3>
        </div>
        <div className="cash-breakdown">
          <span className="account-text account-title">BUYING POWER</span>
          <h3><strong>${stringifyToFloat(user.cash_value)}</strong></h3>
        </div>
      </div>
    );
  }
}



export default Portfolio;
