import React from 'react';
import Chart from 'chart.js';
// import moment from 'moment';
import moment from 'moment-timezone'
import isEqual from 'lodash';
import transform from 'moment-transform';

import ChartOverlayContainer from './chart_overlay_container';

class ChartComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     numRenders: 0,
     timeSeries: 'today',
     minDate: moment(new Date()).tz('America/New_York').subtract(1, 'days')
   }
   this.changeActive = this.changeActive.bind(this);
   this.renderChart = this.renderChart.bind(this);
 }

 componentWillMount() {
   const { symbol } = this.props.match.params;
   this.fetchRealtimePrices(symbol);
 }

 componentWillReceiveProps(nextProps) {
   if (
     ( nextProps.companyStockPrices &&
     nextProps.companyStockPrices.intraday &&
     nextProps.companyStockPrices.daily &&
     !nextProps.companyLoading )
   ) {
     this.setState({
       filteredStockPrices: this.filterStockPrices(this.state.minDate, this.state.timeSeries),
       numRenders: this.state.numRenders + 1,
     }, () => {
       if (this.state.numRenders === 1) {
         this.renderChart();
       }
     });
   } else if (nextProps.match.params.symbol !== this.props.match.params.symbol) {
     const { symbol } = nextProps.match.params;
     if (!nextProps.companyStockPrices) {
       this.props.fetchIntradayStockPrices(symbol)
         .then(() => this.renderChart());
       this.props.fetchDailyStockPrices(symbol);
     }
   }
 }

 fetchRealtimePrices(symbol) {
   this.props.fetchIntradayStockPrices(symbol);
   this.props.fetchDailyStockPrices(symbol);
 }

 filterStockPrices(minDate, timeSeries) {
   const { companyStockPrices } = this.props;
   let stockPrices = ['today', '1W'].includes(timeSeries) ? companyStockPrices.intraday : companyStockPrices.daily;
   return stockPrices.filter(stockPrice => new Date(stockPrice.time) > new Date(minDate))
 }

 closingPriceLine() {
   let blankArr = new Array(this.state.filteredStockPrices.length);
   return blankArr.fill(this.props.companyStockPrices.last_closing_price);
 }

 renderChart() {
   const { filteredStockPrices } = this.state;
   if (this.state.chart) { this.state.chart.destroy() }
   let graphColor;
   if (filteredStockPrices[0].price < filteredStockPrices.slice(-1)[0].price) {
     graphColor = "#08d093";
   } else {
     graphColor = "#f45531";
   }
   let stocksCanvas = document.getElementById("companyChart");
   let stocksCtx = stocksCanvas.getContext('2d');
   stocksCtx.clearRect(0, 0, stocksCanvas.width, stocksCanvas.height);
   var chart = new Chart(stocksCtx, {
     type: 'line',
     data: {
         datasets: [
           {
             fill: false,
             lineTension: 0.1,
             borderColor: graphColor,
             borderWidth: 2,
             pointRadius: .1,
             pointStyle: "circle",
             data: filteredStockPrices.map(stockPrice => stockPrice.price),
           }, {
             fill: false,
             lineTension: .1,
             borderColor: "#b1bfc4",
             borderWidth: 1,
             pointRadius: 0,
             borderDash: [5, 5],
             pointStyle: "circle",
             data: this.closingPriceLine()
           },
         ],
         labels: filteredStockPrices.map(stockPrice => stockPrice.time),
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
   this.setState({chart: chart})
 }

 changeActive(strNum) {
   const now = moment(new Date()).tz('America/New_York');
   let minDate, timeSeries;
   if (strNum === "1") {
     // Today
     minDate = now.subtract(1, 'days');
     timeSeries = "today";
   } else if (strNum === "2") {
     // 1W
     minDate = now.subtract(1, 'weeks');
     timeSeries = "1W";
   } else if (strNum === "3") {
     // 1M
     minDate = now.subtract(1, 'months');
     timeSeries = "1M";
   } else if (strNum === "4") {
     // 3M
     minDate = now.subtract(3, 'months');
     timeSeries = "3M";
   } else if (strNum === "5") {
     // 1Y
     minDate = now.subtract(1, 'years');
     timeSeries = "1Y";
   } else if (strNum === "6") {
     // 5Y
     minDate = now.subtract(5, 'years');
     timeSeries = "5Y";
   }
   this.setState({
     minDate: minDate.format("YYYY-MM-DD HH:mm:ss"),
     filteredStockPrices: this.filterStockPrices(minDate, timeSeries),
     timeSeries
   }, () => {
     this.renderChart();
   });
 }

 render() {
   const { companyLoading, intradayApiLoading, dailyApiLoading } = this.props;
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
     if (!intradayApiLoading && !dailyApiLoading) {
       canvas = canvasContainer;
     } else {
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
     }
     return (
       <div className="chart">
         {canvas}
         <ChartOverlayContainer
           changeActive={this.changeActive}
           historicalPriceDelta={'-15'}
           historicalPercDelta={'15%'}
         />
       </div>
     );
   }
 }
}

export default ChartComponent;
