import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import Chart from 'chart.js';
import moment from 'moment';
import transform from 'moment-transform';

import ChartOverlayContainer from './chart_overlay_container';

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    const intradayPricePoints = [
      "14.9650", "14.9649", "15.0000", "14.9000", "14.8300", "14.8399", "14.8900", "14.8001", "14.7900", "14.8099", "14.8350", "14.9050", "14.8600", "14.9301", "14.9350", "14.9350", "14.9350", "14.9450", "14.9050", "14.9350", "14.9400", "14.5600", "14.5900", "14.7692", "14.8350", "14.8500", "14.8000", "14.8673", "14.8900", "14.8300", "14.9200", "14.9500", "14.9400", "14.9201", "14.9750", "14.9350", "14.9336", "14.9500", "15.0000", "15.0150", "14.9500", "14.9750", "14.9800", "14.9800", "14.9900", "14.9200", "14.8960", "14.8900", "14.8750", "14.7810", "14.6800", "14.7138", "14.7562", "14.7210", "14.6600", "14.6407", "14.6950", "14.6315", "14.6650", "14.6200", "14.6760", "14.6450", "14.6200", "14.5761", "14.5600", "14.5900", "14.5800", "14.6667", "14.6600", "14.6178", "14.6350", "14.6566", "14.7362", "14.7167", "14.7100", "14.7000", "14.7400", "14.7100", "14.7000", "14.7450", "14.7517", "14.7750", "14.7500", "14.7250", "14.7250", "14.7050", "14.6850", "14.6650", "14.6450", "14.6350", "14.6800", "14.7000", "14.6693", "14.6700", "14.6300", "14.6357", "14.6450", "14.6250", "14.6000", "14.5999"
    ];
    const intradayTimePoints = [
      "2017-12-05 14:20:00", "2017-12-05 14:25:00", "2017-12-05 14:30:00", "2017-12-05 14:35:00", "2017-12-05 14:40:00", "2017-12-05 14:45:00", "2017-12-05 14:50:00", "2017-12-05 14:55:00", "2017-12-05 15:00:00", "2017-12-05 15:05:00", "2017-12-05 15:10:00", "2017-12-05 15:15:00", "2017-12-05 15:20:00", "2017-12-05 15:25:00", "2017-12-05 15:30:00", "2017-12-05 15:35:00", "2017-12-05 15:40:00", "2017-12-05 15:45:00", "2017-12-05 15:50:00", "2017-12-05 15:55:00", "2017-12-05 16:00:00", "2017-12-06 09:30:00", "2017-12-06 09:35:00", "2017-12-06 09:40:00", "2017-12-06 09:45:00", "2017-12-06 09:50:00", "2017-12-06 09:55:00", "2017-12-06 10:00:00", "2017-12-06 10:05:00", "2017-12-06 10:10:00", "2017-12-06 10:15:00", "2017-12-06 10:20:00", "2017-12-06 10:25:00", "2017-12-06 10:30:00", "2017-12-06 10:35:00", "2017-12-06 10:40:00", "2017-12-06 10:45:00", "2017-12-06 10:50:00", "2017-12-06 10:55:00", "2017-12-06 11:00:00", "2017-12-06 11:05:00", "2017-12-06 11:10:00", "2017-12-06 11:15:00", "2017-12-06 11:20:00", "2017-12-06 11:25:00", "2017-12-06 11:30:00", "2017-12-06 11:35:00", "2017-12-06 11:40:00", "2017-12-06 11:45:00", "2017-12-06 11:50:00", "2017-12-06 11:55:00", "2017-12-06 12:00:00", "2017-12-06 12:05:00", "2017-12-06 12:10:00", "2017-12-06 12:15:00", "2017-12-06 12:20:00", "2017-12-06 12:25:00", "2017-12-06 12:30:00", "2017-12-06 12:35:00", "2017-12-06 12:40:00", "2017-12-06 12:45:00", "2017-12-06 12:50:00", "2017-12-06 12:55:00", "2017-12-06 13:00:00", "2017-12-06 13:05:00", "2017-12-06 13:10:00", "2017-12-06 13:15:00", "2017-12-06 13:20:00", "2017-12-06 13:25:00", "2017-12-06 13:30:00", "2017-12-06 13:35:00", "2017-12-06 13:40:00", "2017-12-06 13:45:00", "2017-12-06 13:50:00", "2017-12-06 13:55:00", "2017-12-06 14:00:00", "2017-12-06 14:05:00", "2017-12-06 14:10:00", "2017-12-06 14:15:00", "2017-12-06 14:20:00", "2017-12-06 14:25:00", "2017-12-06 14:30:00", "2017-12-06 14:35:00", "2017-12-06 14:40:00", "2017-12-06 14:45:00", "2017-12-06 14:50:00", "2017-12-06 14:55:00", "2017-12-06 15:00:00", "2017-12-06 15:05:00", "2017-12-06 15:10:00", "2017-12-06 15:15:00", "2017-12-06 15:20:00", "2017-12-06 15:25:00", "2017-12-06 15:30:00", "2017-12-06 15:35:00", "2017-12-06 15:40:00", "2017-12-06 15:45:00", "2017-12-06 15:50:00", "2017-12-06 15:55:00", "2017-12-06 16:00:00"
    ];
    const dailyPricePoints = [
      "14.7300", "14.9700", "14.8900", "14.4800", "14.0800", "13.8900", "13.4000", "14.0000", "13.8100", "13.6700", "13.1000", "12.6500", "12.9300", "13.5200", "13.3900", "13.0200", "13.5600", "13.7700", "11.8300", "12.6000", "12.7400", "13.1200", "13.3500", "14.0100", "13.5800", "14.5300", "15.0900", "14.5300", "14.7800", "15.1900", "14.9900", "14.9600", "14.5100", "14.2700", "14.4900", "14.5000", "15.1500", "15.3400", "15.2700", "15.1300", "15.0300", "14.9100", "15.2500", "14.9200", "14.7200", "14.1600", "13.7700", "13.7000", "13.2200", "13.9100", "14.1200", "14.4500", "14.5400", "14.8800", "14.6400", "14.5300", "14.4800", "14.7900", "14.7100", "14.3400", "15.9800", "16.5500", "16.5000", "16.0700", "16.0900", "15.7500", "15.2500", "15.5600", "14.9700", "14.5900", "14.1600", "14.3900", "15.4400", "15.6800", "15.3400", "14.5100", "14.5500", "15.2700", "14.8300", "15.1200", "12.9100", "12.3800", "12.7600", "12.4000", "12.5700", "12.4600", "12.5600", "12.9900", "12.4100", "12.3400", "12.6200", "12.9700", "13.0600", "13.6100", "13.7000", "13.7800", "13.8700", "13.5700", "14.9400", "14.6000"
    ];
    const dailyTimePoints = [
      "2017-07-18", "2017-07-19", "2017-07-20", "2017-07-21", "2017-07-24", "2017-07-25", "2017-07-26", "2017-07-27", "2017-07-28", "2017-07-31", "2017-08-01", "2017-08-02", "2017-08-03", "2017-08-04", "2017-08-07", "2017-08-08", "2017-08-09", "2017-08-10", "2017-08-11", "2017-08-14", "2017-08-15", "2017-08-16", "2017-08-17", "2017-08-18", "2017-08-21", "2017-08-22", "2017-08-23", "2017-08-24", "2017-08-25", "2017-08-28", "2017-08-29", "2017-08-30", "2017-08-31", "2017-09-01", "2017-09-05", "2017-09-06", "2017-09-07", "2017-09-08", "2017-09-11", "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15", "2017-09-18", "2017-09-19", "2017-09-20", "2017-09-21", "2017-09-22", "2017-09-25", "2017-09-26", "2017-09-27", "2017-09-28", "2017-09-29", "2017-10-02", "2017-10-03", "2017-10-04", "2017-10-05", "2017-10-06", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12", "2017-10-13", "2017-10-16", "2017-10-17", "2017-10-18", "2017-10-19", "2017-10-20", "2017-10-23", "2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27", "2017-10-30", "2017-10-31", "2017-11-01", "2017-11-02", "2017-11-03", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-24", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-04", "2017-12-05", "2017-12-06"
    ];
    const thisMorning = moment().transform('09:30:00.000').format("YYYY-MM-DD hh:mm:ss");
    const idxRange = this.idxRange(intradayTimePoints, thisMorning);
    this.state = {
      intradayPricePoints: intradayPricePoints,
      intradayTimePoints: intradayTimePoints,
      dailyPricePoints: dailyPricePoints,
      dailyTimePoints: dailyTimePoints,
      idxRange: idxRange,
      graphTimePoints: this.timesWithinRange(intradayTimePoints, thisMorning),
      graphPricePoints: this.pricesWithinRange(intradayPricePoints, idxRange),
      lastClosingPrice: "",
      minDate: moment().transform('09:30:00.000').format("YYYY-MM-DD hh:mm:ss"),
    };
    this.changeActive = this.changeActive.bind(this);
    // console.log(moment("2017-12-05 14:12:00").format("h:mm A")); // Day
    // console.log(moment("2017-12-05 14:12:00").format("h:mm A, MMM D")); // Week
    // console.log(moment("2017-12-05 14:12:00").format("MMM D")); // Month
    console.log("-----this is working-----");
    console.log(this.props.symbol);
    console.log(this.props.chartData);
  }

  closingPrice() {
    const closingTime = moment().transform('YYYY-MM--01 16:00:00.000').format("YYYY-MM-DD HH:mm:ss");
    const idx = this.state.intradayTimePoints.indexOf(closingTime);
    const closingPrice = this.state.intradayPricePoints[idx];
    return closingPrice;
  }

  setClosingArr(closingPrice, labels) {
    let blankArr = new Array(labels.length);
    return blankArr.fill(closingPrice);
  }

  idxRange(timeArr, minDate) {
    const idxRange = [];
    const now = new Date;
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
    const now = new Date;
    const prevDate = new Date(minDate);
    return timeArr.filter(dateStr => {
      const date = new Date(dateStr);
      if (date > prevDate && date < now) {
        return date;
      }
    });
  }

  pricesWithinRange(prices, range) {
    return prices.filter( (price, idx) => {
      if (range.includes(idx)) return price;
    });
  }

  turnToDateObjs(dateStrArr) {
    return dateStrArr.map(point => new Date(point));
  }

  componentDidUpdate() {
    const { loading } = this.props;
    const { graphPricePoints, graphTimePoints, intradayPricePoints } = this.state;
    const closingPrice = this.closingPrice();
    const latestPrice = intradayPricePoints[intradayPricePoints.length - 1];
    let graphColor;
    graphColor = (latestPrice > closingPrice) ? "#08d093" : "#f45531";
    if ( loading ) {
      return null;
    } else {
      let stocksCtx = document.getElementById("companyChart");
      new Chart(stocksCtx, {
        type: 'line',
        data: {
            datasets: [
              {
                fill: false,
                lineTension: 0.3,
                borderColor: graphColor,
                borderWidth: 2,
                pointRadius: 1,
                pointStyle: "line",
                data: graphPricePoints,
              }, {
                fill: false,
                lineTension: .1,
                borderColor: "#b1bfc4",
                borderWidth: 1,
                pointRadius: 0,
                borderDash: [5, 5],
                pointStyle: "line",
                data: this.setClosingArr(closingPrice, graphTimePoints)
              },
            ],
            labels: graphTimePoints,
        },
        options: {
          legend: {
            display: false,
          },
          tooltips: {
            // mode: "x-axis"
            // intersect: false,
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
      });
    }
  }

  changeActive(strNum) {
    const now = new Date();
    let minDate;
    let timeArr;
    let prices;
    if (strNum === "1") {
      // Today
      minDate = moment().transform('09:30:00.000').format("YYYY-MM-DD hh:mm:ss");
      timeArr = this.state.intradayTimePoints;
      prices = this.state.intradayPricePoints;
    } else if (strNum === "2") {
      // 1W
      minDate = moment(now).subtract(1, 'weeks').format("YYYY-MM-DD hh:mm:ss");
      timeArr = this.state.intradayTimePoints;
      prices = this.state.intradayPricePoints;
    } else if (strNum === "3") {
      // 1M
      minDate = moment(now).subtract(1, 'months').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
    } else if (strNum === "4") {
      // 3M
      minDate = moment(now).subtract(3, 'months').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
    } else if (strNum === "5") {
      // 1Y
      minDate = moment(now).subtract(1, 'years').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
    } else if (strNum === "6") {
      // 5Y
      minDate = moment(now).subtract(5, 'years').format("YYYY-MM-DD");
      timeArr = this.state.dailyTimePoints;
      prices = this.state.dailyPricePoints;
    }
    const idxRange = this.idxRange(timeArr, minDate);
    const timesWithinRange = this.timesWithinRange(timeArr, minDate);
    const pricesWithinRange = this.pricesWithinRange(prices, idxRange);
    this.setState({
      graphTimePoints: timesWithinRange,
      graphPricePoints: pricesWithinRange,
      idxRange: idxRange
    });
  }

  render() {
    const { loading } = this.props;
    const { imgUrl } = this.state;
    if (loading) {
      return (<div></div>);
    } else {
      console.log(this.props.chartData);
      return (
        <div className="chart">
          <div className="line-chart-container">
            <canvas id="companyChart" className="line-chart"></canvas>
          </div>
          <ChartOverlayContainer changeActive={this.changeActive}/>
        </div>
      );
    }
  }
}

export default ChartComponent;
