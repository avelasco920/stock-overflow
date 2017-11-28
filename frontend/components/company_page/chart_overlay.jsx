import React from 'react';
import { stringifyToFloat } from '../../util/parsing_functions';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watching: this.props.company.current_user_watching
    };
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
            <a>Today</a>
            <a>1W</a>
            <a>1M</a>
            <a>3M</a>
            <a>1Y</a>
            <a>5Y</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;
