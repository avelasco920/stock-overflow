import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';
import Chart from 'chart.js';
import moment from 'moment';

import ChartOverlay from './chart_overlay';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    const intradayPricePoints = [
      "10.0000", "9.9400", "9.9160", "9.9400", "9.9550", "9.9950", "9.9449", "9.9400", "9.9850", "9.9800", "9.9700", "10.0350", "10.0310", "10.0450", "10.0200", "9.9900", "10.0350", "10.0000", "10.0150", "10.0150", "10.0151", "9.9950", "9.9850", "9.9875", "9.9850", "10.0050", "9.9990", "9.9857", "9.9950", "9.9650", "9.9700", "9.9500", "9.9700", "9.9650", "9.9800", "9.9650", "9.9850", "9.9750", "9.9900", "9.9900", "10.0001", "9.9850", "10.0101", "10.0200", "10.0400", "9.9959", "10.0050", "10.0048", "10.0342", "10.0100", "10.0000", "10.0000", "10.0050", "10.0000", "9.9800", "9.9850", "9.9900", "9.9890", "9.9700", "9.9850", "9.9800", "9.9950", "9.9950", "9.9850", "9.9650", "9.9750", "9.9650", "9.9850", "9.9750", "9.9650", "9.9750", "10.0000", "10.0900", "9.9569", "10.0975", "10.0400", "10.0963", "10.0600", "10.0500", "10.0550", "10.0100", "10.0310", "10.0450", "10.0700", "10.0715", "10.0850", "10.1245", "10.1200", "10.1000", "10.1050", "10.1100", "10.1100", "10.1010", "10.1100", "10.1190", "10.1350", "10.1200", "10.1200", "10.0750", "10.0910"
    ];
    const intradayTimePoints = [
      "2017-12-06 10:05:00", "2017-12-06 10:10:00", "2017-12-06 10:15:00", "2017-12-06 10:20:00", "2017-12-06 10:25:00", "2017-12-06 10:30:00", "2017-12-06 10:35:00", "2017-12-06 10:40:00", "2017-12-06 10:45:00", "2017-12-06 10:50:00", "2017-12-06 10:55:00", "2017-12-06 11:00:00", "2017-12-06 11:05:00", "2017-12-06 11:10:00", "2017-12-06 11:15:00", "2017-12-06 11:20:00", "2017-12-06 11:25:00", "2017-12-06 11:30:00", "2017-12-06 11:35:00", "2017-12-06 11:40:00", "2017-12-06 11:45:00", "2017-12-06 11:50:00", "2017-12-06 11:55:00", "2017-12-06 12:00:00", "2017-12-06 12:05:00", "2017-12-06 12:10:00", "2017-12-06 12:15:00", "2017-12-06 12:20:00", "2017-12-06 12:25:00", "2017-12-06 12:30:00", "2017-12-06 12:35:00", "2017-12-06 12:40:00", "2017-12-06 12:45:00", "2017-12-06 12:50:00", "2017-12-06 12:55:00", "2017-12-06 13:00:00", "2017-12-06 13:05:00", "2017-12-06 13:10:00", "2017-12-06 13:15:00", "2017-12-06 13:20:00", "2017-12-06 13:25:00", "2017-12-06 13:30:00", "2017-12-06 13:35:00", "2017-12-06 13:40:00", "2017-12-06 13:45:00", "2017-12-06 13:50:00", "2017-12-06 13:55:00", "2017-12-06 14:00:00", "2017-12-06 14:05:00", "2017-12-06 14:10:00", "2017-12-06 14:15:00", "2017-12-06 14:20:00", "2017-12-06 14:25:00", "2017-12-06 14:30:00", "2017-12-06 14:35:00", "2017-12-06 14:40:00", "2017-12-06 14:45:00", "2017-12-06 14:50:00", "2017-12-06 14:55:00", "2017-12-06 15:00:00", "2017-12-06 15:05:00", "2017-12-06 15:10:00", "2017-12-06 15:15:00", "2017-12-06 15:20:00", "2017-12-06 15:25:00", "2017-12-06 15:30:00", "2017-12-06 15:35:00", "2017-12-06 15:40:00", "2017-12-06 15:45:00", "2017-12-06 15:50:00", "2017-12-06 15:55:00", "2017-12-06 16:00:00", "2017-12-07 09:30:00", "2017-12-07 09:35:00", "2017-12-07 09:40:00", "2017-12-07 09:45:00", "2017-12-07 09:50:00", "2017-12-07 09:55:00", "2017-12-07 10:00:00", "2017-12-07 10:05:00", "2017-12-07 10:10:00", "2017-12-07 10:15:00", "2017-12-07 10:20:00", "2017-12-07 10:25:00", "2017-12-07 10:30:00", "2017-12-07 10:35:00", "2017-12-07 12:05:00", "2017-12-07 12:10:00", "2017-12-07 12:15:00", "2017-12-07 12:20:00", "2017-12-07 12:25:00", "2017-12-07 12:30:00", "2017-12-07 12:35:00", "2017-12-07 12:40:00", "2017-12-07 12:45:00", "2017-12-07 12:50:00", "2017-12-07 12:55:00", "2017-12-07 13:00:00", "2017-12-07 13:05:00", "2017-12-07 13:10:00"
     ];
    const dailyPricePoints = [
     "13.5500", "13.8000", "13.8800", "14.1600", "14.1100", "14.7600", "14.1200", "13.9500", "13.6100", "13.7100", "13.3700", "13.2400", "13.1200", "13.4300", "13.1100", "12.8300", "12.1200", "12.2300", "12.7600", "13.0200", "12.6300", "12.3400", "12.3700", "12.0500", "12.1700", "12.4800", "12.5000", "12.4300", "12.2300", "12.1500", "12.6700", "13.0000", "13.1900", "12.9200", "12.8600", "12.6300", "12.2500", "12.5500", "12.3000", "12.2200", "12.2600", "12.5200", "13.0800", "13.1200", "13.7400", "13.4100", "13.3000", "12.6100", "12.4500", "12.7400", "12.7400", "12.7500", "12.7100", "13.4200", "13.3100", "13.3400", "13.2300", "13.4700", "13.7000", "13.8800", "14.2000", "14.2200", "14.2600", "14.1600", "14.0700", "13.9500", "13.8100", "14.1000", "14.2500", "12.3300", "12.0100", "11.8400", "10.8900", "10.9900", "10.8000", "10.8500", "11.1200", "11.9300", "12.0500", "11.7100", "11.1200", "11.2600", "11.0900", "11.1200", "11.0700", "11.2500", "11.3800", "11.3400", "11.4000", "11.3700", "11.3800", "11.5500", "11.1700", "10.8300", "10.8900", "10.7300", "10.0300", "9.9100", "10.0000", "10.0400"
    ];
    const dailyTimePoints = [
     "2017-07-19", "2017-07-20", "2017-07-21", "2017-07-24", "2017-07-25", "2017-07-26", "2017-07-27", "2017-07-28", "2017-07-31", "2017-08-01", "2017-08-02", "2017-08-03", "2017-08-04", "2017-08-07", "2017-08-08", "2017-08-09", "2017-08-10", "2017-08-11", "2017-08-14", "2017-08-15", "2017-08-16", "2017-08-17", "2017-08-18", "2017-08-21", "2017-08-22", "2017-08-23", "2017-08-24", "2017-08-25", "2017-08-28", "2017-08-29", "2017-08-30", "2017-08-31", "2017-09-01", "2017-09-05", "2017-09-06", "2017-09-07", "2017-09-08", "2017-09-11", "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15", "2017-09-18", "2017-09-19", "2017-09-20", "2017-09-21", "2017-09-22", "2017-09-25", "2017-09-26", "2017-09-27", "2017-09-28", "2017-09-29", "2017-10-02", "2017-10-03", "2017-10-04", "2017-10-05", "2017-10-06", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12", "2017-10-13", "2017-10-16", "2017-10-17", "2017-10-18", "2017-10-19", "2017-10-20", "2017-10-23", "2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27", "2017-10-30", "2017-10-31", "2017-11-01", "2017-11-02", "2017-11-03", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-24", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07"
    ];
    this.state = {
      activeId: "1",
      timeSeries: "Today",
      graphTimePoints: [],
      graphPricePoints: [],
      idxRange: [],
      intradayPricePoints: intradayPricePoints,
      intradayTimePoints: intradayTimePoints,
      dailyPricePoints: dailyPricePoints,
      dailyTimePoints: dailyTimePoints,
    };
  }

  componentWillMount() {
    const { activeId, graphPricePoints, graphTimePoints } = this.state;
    const { intradayPricePoints, intradayTimePoints } = this.state;
    const firstMin = moment(new Date("2017-12-07 09:30:00")).format("YYYY-MM-DD HH:mm:ss");
    const idxRange = this.idxRange(intradayTimePoints, firstMin);
    this.setState({
      graphTimePoints: this.timesWithinRange(intradayTimePoints, firstMin),
      graphPricePoints: this.pricesWithinRange(intradayPricePoints, idxRange),
      idxRange: idxRange,
    });
  }

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    const { activeId, graphPricePoints, graphTimePoints } = this.state;
    const { intradayPricePoints, intradayTimePoints } = this.state;
    let stocksCtx = document.getElementById("homeChart");
    const lastIdx = graphPricePoints.length - 1;
    let graphColor;
    if (parseFloat(graphPricePoints[0]) < parseFloat(graphPricePoints[lastIdx])) {
      graphColor = "#08d093";
    } else {
      graphColor = "#f45531";
    }
    new Chart(stocksCtx, {
      type: 'line',
      data: {
          datasets: [
            {
              fill: false,
              lineTension: 0.1,
              borderColor: graphColor,
              borderWidth: 2,
              pointRadius: 0,
              data: graphPricePoints,
            }, {
              fill: false,
              lineTension: .1,
              borderColor: "#b1bfc4",
              borderWidth: 1,
              pointRadius: 0,
              borderDash: [5, 5],
              data: new Array(graphTimePoints.length).fill("9.9950")
            },
          ],
          labels: graphTimePoints,
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
                display: false,
                gridLines : {
                    display : false
                }
            }]
          },
        }
      }
    );
  }

  idxRange(timeArr, minDate) {
    const idxRange = [];
    const now = new Date("2017-12-07 13:10:00");
    const prevDate = new Date(minDate);
    timeArr.forEach((dateStr, idx) => {
      const date = new Date(dateStr);
      if (date > prevDate && date < now) {
        idxRange.push(idx);
      }
    });
    return idxRange;
  }

  timesWithinRange(timeArr, minDate) {
    const now = new Date("2017-12-07 13:10:00");
    const prevDate = new Date(minDate);
    return timeArr.filter(dateStr => {
      const date = new Date(dateStr);
      if (date > prevDate && date < now) {
        return date;
      }
    });
  }

  pricesWithinRange(prices, range) {
    const pricesInRange = [];
    range.forEach (idx => {
      pricesInRange.push(prices[idx]);
    });
    return pricesInRange;
  }

  priceDiff() {
    const { graphPricePoints, intradayPricePoints } = this.state;
    const lastPrice = graphPricePoints[0];
    const latestPrice = intradayPricePoints[intradayPricePoints.length - 1];
    return parseFloat(latestPrice) - parseFloat(lastPrice);
  }

  stringifyPriceChange() {
    const priceDiff = this.priceDiff();
    let priceChange = parseFloat(Math
                            .round(priceDiff * 100) / 100)
                            .toFixed(2);
    if (priceChange[0] === "-") {
      priceChange = priceChange.replace("-", "-$");
    } else {
      priceChange = "+$" + priceChange;
    }
    return priceChange;
  }

  stringifyPercentageChange() {
    const lastPrice = this.state.graphPricePoints[0];
    const priceDiff = this.priceDiff();
    const percDiff = (priceDiff / parseFloat(lastPrice)) * 100;
    let percChange = parseFloat(Math
                              .round(percDiff * 100) / 100)
                              .toFixed(2);
    if (percChange[0] === "-") {
      percChange = `(${percChange}%)`;
    } else {
      percChange = `(+${percChange}%)`;
    }
    return percChange;
  }

  changeActive(strNum) {
    const now = new Date("2017-12-07 13:10:00");
    let minDate, timeArr, prices, timeSeries;
    if (strNum === "1") {
      // Today
      minDate = moment(new Date("2017-12-07 09:30:00")).format("YYYY-MM-DD HH:mm:ss");
      timeArr = this.state.intradayTimePoints;
      prices = this.state.intradayPricePoints;
      timeSeries = "Today";
    } else if (strNum === "2") {
      // 1W
      minDate = moment(now).subtract(1, 'weeks').format("YYYY-MM-DD HH:mm:ss");
      timeArr = this.state.intradayTimePoints;
      prices = this.state.intradayPricePoints;
      timeSeries = "This Week";
    } else if (strNum === "3") {
      // 1M
      minDate = moment(now).subtract(1, 'months').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
      timeSeries = "This Month";
    } else if (strNum === "4") {
      // 3M
      minDate = moment(now).subtract(3, 'months').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
      timeSeries = "Last Three Months";
    } else if (strNum === "5") {
      // 1Y
      minDate = moment(now).subtract(1, 'years').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
      timeSeries = "Last Year";
    } else if (strNum === "6") {
      // 5Y
      minDate = moment(now).subtract(5, 'years').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
      timeSeries = "Five Years";
    }
    const idxRange = this.idxRange(timeArr, minDate);
    const timesWithinRange = this.timesWithinRange(timeArr, minDate);
    const pricesWithinRange = this.pricesWithinRange(prices, idxRange);
    this.setState({
      graphTimePoints: timesWithinRange,
      graphPricePoints: pricesWithinRange,
      idxRange: idxRange,
      timeSeries,
    }, () => {
      this.renderChart();
    });
  }

  render() {
    const { user } = this.props;
    const { timeSeries } = this.state;
    const priceChange = this.stringifyPriceChange();
    const percChange = this.stringifyPercentageChange();
    return (
      <div className="chart">
        <div className="chart-overlay">
          <div className="account-info">
            <h2>${stringifyToFloat(user.portfolio_value)}</h2>
            <div className="delta">
              <h4>{priceChange}{percChange}</h4> <span>{timeSeries}</span>
            </div>
          </div>
          <div className="chart-history">
            <a onClick={() => this.changeActive("1")} id="1">Today</a>
            <a onClick={() => this.changeActive("2")} id="2">1W</a>
            <a onClick={() => this.changeActive("3")} id="3">1M</a>
            {/* <a onClick={() => this.changeActive("4")} id="4">3M</a> */}
            <a onClick={() => this.changeActive("5")} id="5">1Y</a>
            {/* <a onClick={() => this.changeActive("6")} id="6">5Y</a> */}
          </div>
        </div>
        <div className="line-chart-container">
          <canvas id="homeChart" className="line-chart"></canvas>
        </div>
      </div>
    );
  }
}

export default ChartComponent;
