import React from 'react';
import {
  stringifyToFloat,
  stringifyToFloatNoCommas
} from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watching: this.props.company.current_user_watching,
      activeId: "1",
      timeSeries: "Today",
    };
  }

  componentDidMount() {
      const { activeId } = this.state;
      let initialActive = document.getElementById(activeId);
      initialActive.classList.add("chart-history-active");
    }

  button () {
    const { company, watching } = this.props;
    if ( watching ) {
      return (
        <button
          onClick={ () => this.props.unwatchCompany(company.id) }
          className="watching watch-button">
          <i className="fa fa-eye" aria-hidden="true"></i>
          Watching
        </button>
      );
    } else {
      return (
        <button
          onClick={ () => this.props.watchCompany(company.id) }
          className="not-watching watch-button">
          <i className="fa fa-eye" aria-hidden="true" />
          Watch { company.symbol }
        </button>
      );
    }
  }

  changeChart(strNum) {
    this.props.changeActive(strNum);
    const { activeId } = this.state;
    let currentlyActive = document.getElementById(activeId);
    currentlyActive.classList.remove("chart-history-active");
    let newActive = document.getElementById(strNum);
    newActive.classList.add("chart-history-active");
    let timeSeries;
    switch(strNum) {
    case "1":
        timeSeries = "Today";
        break;
    case "2":
        timeSeries = "This Week";
        break;
    case "3":
        timeSeries = "This Month";
        break;
    case "4":
        timeSeries = "Last 3 Months";
        break;
    case "5":
        timeSeries = "Last Year";
        break;
    case "6":
        timeSeries = "Last 5 Years";
        break;
    }
    this.setState({ activeId: strNum, timeSeries });
  }

  stringifyPriceChange(historicalPriceDelta) {
    let priceChange;
    if (this.state.intradayLoading) {
      priceChange = "$0.00";
    } else {
      priceChange = parseFloat(Math
                            .round(historicalPriceDelta * 100) / 100)
                            .toFixed(2);
      if (priceChange[0] === "-") {
        priceChange = priceChange.replace("-", "-$");
      } else {
        priceChange = "+$" + priceChange;
      }
    }
    return priceChange;
  }

  stringifyPercentageChange(historicalPercDelta) {
    let percChange;
    if (this.state.intradayLoading) {
      percChange = "(0.00%)";
    } else {
      percChange = parseFloat(Math
                            .round(historicalPercDelta * 100) / 100)
                            .toFixed(2);
      if (percChange[0] === "-") {
        percChange = `(${percChange}%)`;
      } else {
        percChange = `(+${percChange}%)`;
      }
    }
    return percChange;
  }

  render() {
    const {
      company, chartData, intradayLoading,
      historicalPriceDelta, historicalPercDelta
    } = this.props;
    const { timeSeries } = this.state;
    const companyUrl = `/company/${company.symbol};`;
    const priceChange = this.stringifyPriceChange(historicalPriceDelta);
    const percChange = this.stringifyPercentageChange(historicalPercDelta);
    let marketPrice;
    marketPrice = `${stringifyToFloat(company.market_price)}`;
    return (
      <div className="chart-overlay">
        <div className="company-info">
          <h2>{company.name}</h2>
          <h1>${marketPrice}</h1>
          <div className="delta">
            <h4>{priceChange}{percChange}</h4> <span>{timeSeries}</span>
          </div>
        </div>
        {this.button()}
        <div className="chart-history-container">
          <div className="chart-history">
            <a onClick={() => this.changeChart("1")} id="1">Today</a>
            <a onClick={() => this.changeChart("2")} id="2">1W</a>
            <a onClick={() => this.changeChart("3")} id="3">1M</a>
            <a onClick={() => this.changeChart("4")} id="4">3M</a>
            <a onClick={() => this.changeChart("5")} id="5">1Y</a>
            {/* <a onClick={() => this.changeChart("6")} id="6">5Y</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;
