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
    const { companyStockData } = this.props;
    this.state = {
      intradayPricePoints: [],
      intradayTimePoints: [],
      dailyPricePoints: [],
      dailyTimePoints: [],
      graphTimePoints: [],
      graphPricePoints: [],
      numRenders: 0,
    };
    this.changeActive = this.changeActive.bind(this);
    // console.log(moment("2017-12-05 14:12:00").format("h:mm A")); // Day
    // console.log(moment("2017-12-05 14:12:00").format("h:mm A, MMM D")); // Week
    // console.log(moment("2017-12-05 14:12:00").format("MMM D")); // Month
    // console.log(this.state.intradayPricePoints);
  }

  firstMin() {
    const midnight = moment().transform('00:00:00.000').format("YYYY-MM-DD HH:mm:ss");
    const marketOpen = moment().transform('10:00:00.000').format("YYYY-MM-DD HH:mm:ss");
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    if (midnight < now && now < marketOpen ) {
      return moment().subtract(1, 'days').format("YYYY-MM-DD HH:mm:ss");
    } else {
      return moment().transform('09:30:00.000').format("YYYY-MM-DD HH:mm:ss");
    }
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

  componentWillReceiveProps(nextProps) {
    console.log("receiving props");
    if (nextProps.companyStockData && nextProps.companyStockData.intraday && nextProps.companyStockData.daily && !nextProps.companyLoading) {
      const firstMin = this.firstMin();
      const intradayPrices = nextProps.companyStockData.intraday.prices;
      const intradayTime = nextProps.companyStockData.intraday.time;
      const dailyPrices = nextProps.companyStockData.daily.prices;
      const dailyTime = nextProps.companyStockData.daily.time;
      const idxRange = this.idxRange(intradayTime, firstMin);
      this.setState({
        intradayPricePoints: intradayPrices,
        intradayTimePoints: intradayTime,
        dailyPricePoints: dailyPrices,
        dailyTimePoints: dailyTime,
        graphTimePoints: this.timesWithinRange(intradayTime, firstMin),
        graphPricePoints: this.pricesWithinRange(intradayPrices, idxRange),
        numRenders: this.state.numRenders + 1,
      }, () => {
        console.log(this.state.numRenders);
        if (this.state.numRenders === 1) {
          this.renderChart();
        }
      });
    }
  }

  componentWillMount() {
    const { symbol } = this.props.match.params;
    const { companyStockData } = this.props;
    if (!companyStockData) {
      this.props.fetchRealtimeIntradayData(symbol);
      this.props.fetchRealtimeDailyData(symbol);
    }
  }

  // componentDidMount() {
  //   console.log("mounted");
  //   const { symbol } = this.props.match.params;
  //   const { companyStockData } = this.props;
  //   if (companyStockData) {
  //     const firstMin = this.firstMin();
  //     const intradayPrices = companyStockData.intraday.prices;
  //     const intradayTime = companyStockData.intraday.time;
  //     const dailyPrices = companyStockData.daily.prices;
  //     const dailyTime = companyStockData.daily.time;
  //     const idxRange = this.idxRange(intradayTime, firstMin);
  //     this.setState({
  //       intradayPricePoints: intradayPrices,
  //       intradayTimePoints: intradayTime,
  //       dailyPricePoints: dailyPrices,
  //       dailyTimePoints: dailyTime,
  //       graphTimePoints: this.timesWithinRange(intradayTime, firstMin),
  //       graphPricePoints: this.pricesWithinRange(intradayPrices, idxRange),
  //       numRenders: this.state.numRenders + 1
  //     }, () => this.renderChart());
  //   }
  // }

  renderChart() {
    const { companyLoading } = this.props;
    const { graphPricePoints, graphTimePoints, intradayPricePoints } = this.state;
    const closingPrice = this.closingPrice();
    const latestPrice = intradayPricePoints[intradayPricePoints.length - 1];
    let graphColor;
    graphColor = (latestPrice > closingPrice) ? "#08d093" : "#f45531";
    let stocksCtx = document.getElementById("companyChart");
    console.log("stocksCtx",stocksCtx);
    new Chart(stocksCtx, {
      type: 'line',
      data: {
          datasets: [
            {
              fill: false,
              lineTension: 0.3,
              borderColor: graphColor,
              borderWidth: 2,
              pointRadius: .5,
              pointStyle: "circle",
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
      }
    );
  }

  changeActive(strNum) {
    const now = new Date();
    let minDate;
    let timeArr;
    let prices;
    if (strNum === "1") {
      // Today
      minDate = this.firstMin();
      timeArr = this.state.intradayTimePoints;
      prices = this.state.intradayPricePoints;
    } else if (strNum === "2") {
      // 1W
      minDate = moment(now).subtract(1, 'weeks').format("YYYY-MM-DD HH:mm:ss");
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
    }, () => {
      this.renderChart();
    });
  }

  render() {
    const { companyLoading, intradayApiLoading, dailyApiLoading } = this.props;
    const { imgUrl } = this.state;
    let canvasContainer = (
      <div className="line-chart-container">
        <canvas id="companyChart" className="line-chart"></canvas>
      </div>
    );
    if (companyLoading) {
      return (
        canvasContainer
      );
    } else {
      let canvas;
      if (intradayApiLoading && dailyApiLoading) {
        canvas = (
          <div className="spinner-chart-container">
            <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
            </div>
          </div>
        );
      } else {
        canvas = canvasContainer;
      }
      return (
        <div className="chart">
          {canvas}
          <ChartOverlayContainer changeActive={this.changeActive}/>
        </div>
      );
    }
  }
}

export default ChartComponent;
