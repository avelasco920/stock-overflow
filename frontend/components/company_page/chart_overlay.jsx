import React from 'react';
import { stringifyToFloat } from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watching: this.props.company.current_user_watching,
      activeId: "1",
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
    this.setState({ activeId: strNum });
  }

  render() {
    const { company } = this.props;
    const companyUrl = `/company/${company.symbol};`;
    return (
      <div className="chart-overlay">
        <div className="company-info">
          <h2>{company.name}</h2>
          <h1>${stringifyToFloat(company.market_price)}</h1>
          <div className="delta">
            <h4>+$7.01(+0.70%)</h4> <span>Today</span>
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
            <a onClick={() => this.changeChart("6")} id="6">5Y</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;
