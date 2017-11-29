import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      company: this.props.company,
      loading: this.props.loading,
      numShares: ""
    };
    this.buyShares = this.buyShares.bind(this);
    this.sellShares = this.sellShares.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  buyShares(e) {
    e.preventDefault();
    const id = this.props.company.id;
    let event = {
      trade_event: {
        num_shares: this.state.numShares,
        trade_type: "buy"
      }
    };
    this.props.makeTrade(id, event);
  }

  sellShares(e) {
    e.preventDefault();
    const id = this.props.company.id;
    let event = {
      trade_event: {
        num_shares: this.state.numShares,
        trade_type: "sell"
      }
    };
    this.props.makeTrade(id, event);
  }

  render() {
    const { loading, company, user } = this.props;
    const { numShares } = this.state;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="stock-form">
          <h4>Buy {company.symbol}</h4>
          <div className="stock-form-main">
            <div className="stock-form-detail-container">
              <span className="stock-form-label">Shares of {company.symbol}</span>
              <input
                type="text"
                value={this.state.numShares.replace(/[^0-9]/g,'')}
                onChange={this.update('numShares')}
                className="gray-input"
              />
            </div>
            <div className="stock-form-detail-container">
              <span className="stock-form-label">Market Price</span>
              <span className="stock-form-detail">${stringifyToFloat(company.market_price)}</span>
            </div>
            <div className="stock-form-detail-container">
              <span className="stock-form-label" id="stock-total">Estimated Cost</span>
              <span className="stock-form-detail" id="stock-total">
                ${stringifyToFloat(numShares * company.market_price)}
              </span>
            </div>
          </div>
          <div className="buttons">
            <input
              type="button"
              value="Buy"
              onClick={this.buyShares}
              className="buy-button"
            />
            <input
              type="button"
              value="Sell"
              onClick={this.sellShares}
              className="sell-button"
            />
          </div>
          <span className="user-available-cash">
            <strong>${stringifyToFloat(user.cash_value)}</strong> Available
          </span>
        </div>
      );
    }
  }
}

export default Chart;
