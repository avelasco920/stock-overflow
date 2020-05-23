import React from 'react';
import Chart from 'chart.js';

import ChartOverlayContainer from './chart_overlay_container';
import LoadingSpinner from '../loading_spinner';

function CanvasContainer() {
  return (
    <div className="line-chart-container">
      <canvas id="companyChart" className="line-chart"></canvas>
    </div>
  )
}

class ChartComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     timeSeries: '1D',
   }
   this.changeActive = this.changeActive.bind(this);
   this.renderChart = this.renderChart.bind(this);
 }

 componentWillMount() {
   const { symbol } = this.props.match.params;
   this.props.fetchStockPrices(symbol);
 }

 componentDidUpdate(prevProps) {
   if (prevProps.stockPricesLoading && !this.props.stockPricesLoading) {
     this.renderChart();
   }
 }

 componentWillReceiveProps(nextProps) {
   const { companyStockPrices } = nextProps;
   if (nextProps.match.params.symbol !== this.props.match.params.symbol) {
     const { symbol } = nextProps.match.params;
     this.props.fetchStockPrices(symbol)
       .then(() => this.renderChart());
   }
 }

 closingPriceLine() {
   const { stockPrices } = this.getStockPriceDataForTimeRange();
   let blankArr = new Array(stockPrices.length);
   return blankArr.fill(this.props.companyStockPrices.last_closing_price_before_most_recent_trading_day);
 }

 getStockPriceDataForTimeRange() {
   const { companyStockPrices } = this.props;
   const { timeSeries } = this.state;
   let stockPrices;
   if (timeSeries === "1D") {
     stockPrices = companyStockPrices.stock_prices_for_one_day;
   } else if (timeSeries === "1W") {
     stockPrices = companyStockPrices.stock_prices_for_one_week;
   } else if (timeSeries === "1M") {
     stockPrices = companyStockPrices.stock_prices_for_one_month;
   } else if (timeSeries === "3M") {
     stockPrices = companyStockPrices.stock_prices_for_three_months;
   } else if (timeSeries === "1Y") {
     stockPrices = companyStockPrices.stock_prices_for_one_year;
   }
   return {
     stockPrices,
     startPrice: stockPrices[0].price,
     endPrice: stockPrices.slice(-1)[0].price
   }
 }

 renderChart() {
   const { stockPrices, startPrice, endPrice } = this.getStockPriceDataForTimeRange();
   if (this.state.chart) { this.state.chart.destroy() }
   let graphColor;
   if (startPrice < endPrice) {
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
             data: stockPrices.map(stockPrice => stockPrice.price),
           }, {
             fill: false,
             lineTension: .1,
             borderColor: "#b1bfc4",
             borderWidth: 1,
             pointRadius: 0,
             borderDash: [5, 5],
             pointStyle: "circle",
             data: (this.state.timeSeries === '1D') ? this.closingPriceLine() : []
           },
         ],
         labels: stockPrices.map(stockPrice => stockPrice.time),
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

 changeActive(timeSeries) {
   this.setState({ timeSeries }, () => {
     this.renderChart();
   });
 }

 render() {
   const { companyLoading, stockPricesLoading, companyMarketPrice, companyStockPrices } = this.props;
   const { chart } = this.state;
   return (
     <div className="chart">
       <div className="line-chart-container">
         <canvas id="companyChart" className="line-chart"></canvas>
         {stockPricesLoading && (
           <div className="spinner-chart-container">
             <LoadingSpinner />
           </div>
         )}
       </div>
       {!companyLoading && (
         <ChartOverlayContainer
           changeActive={this.changeActive}
           historicalPriceDelta={companyStockPrices ? companyMarketPrice - this.getStockPriceDataForTimeRange().startPrice : 0}
           historicalPercDelta={companyStockPrices ? companyMarketPrice / this.getStockPriceDataForTimeRange().startPrice : 0}
         />
       )}
     </div>
   );
  }
}

export default ChartComponent;
