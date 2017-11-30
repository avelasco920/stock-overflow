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
      numShares: this.props.numShares,
      status: "initial",
      lightBox: ".light-box-hide",
      modalClose: "modal-close-hidden",
      tradeMethod: "",
      modalClass: "sidebar",
    };
    this.processTrade = this.processTrade.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.preventDefaultForScrollKeys = this.preventDefaultForScrollKeys.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  processTrade(e) {
    e.preventDefault();
    this.props.clearTradeEventErrors();
    const id = this.props.company.id;
    let event = {
      trade_event: {
        num_shares: this.state.numShares,
        trade_type: this.state.tradeMethod
      }
    };
    this.props.makeTrade(id, event);
    this.props.history.push('/account');
  }

  renderErrors() {
    return(
      <ul className="stock-form-errors">
        {this.props.errors.map((error, i) => (
          <li className="stock-form-error"
            key={`error-${i}`}
            >
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderModal() {
    if (this.state.status === "initial") {
      return this.renderInitial();
    } else if (this.state.status === "review") {
      return this.renderReview();
    } else if (this.state.status === "submit") {
      return this.renderSubmit();
    }
  }

  changeState(method) {
    if (this.state.status === "initial") {
      this.setState({
        status: "review",
        lightBox: "light-box",
        modalClose: "modal-close",
        tradeMethod: method,
        modalClass: "stock-form"
      });
    } else if (this.state.status === "review") {
      this.setState({
        status: "submit",
      });
    }
  }

  closeModal() {
    this.setState({
      status: "initial",
      lightBox: "",
      modalClose: "modal-close-hidden",
      tradeMethod: "",
      modalClass: "stock-form"
    });
  }

  renderInitial() {
    const isEnabled = this.state.numShares > 0;
    return (
      <div className="buttons">
        <input
          type="button"
          value="Buy"
          onClick={() => this.changeState("buy")}
          className="buy-button hvr-sweep-to-right"
          disabled={!isEnabled}
        />
        <input
          type="button"
          value="Sell"
          onClick={() => this.changeState("sell")}
          className="sell-button"
          disabled={!isEnabled}
        />
      </div>
    );
  }

  renderReview() {
    return (
      <div>
        <div className="buttons">
          <input
            type="button"
            value="Review"
            onClick={() => this.changeState()}
            className="button"
          />
        </div>
      </div>
    );
  }

  renderSubmit() {
    const { company } = this.props;
    const shares = `${this.state.numShares}`;
    const symbol = company.symbol;
    const marketPrice = company.market_price;
    const tradeMethod = this.state.tradeMethod;
    const totalPrice = stringifyToFloat(company.market_price);
    return (
      <div className="order-summary">
        <h4>Order Summary</h4>
        <span className="order-summary-text">
          You are about to submit an order for <strong>{shares} shares
          </strong> to <strong>{ tradeMethod }</strong> <strong>
          {symbol} </strong> for <strong>${totalPrice}</strong>.
          This order will execute at the best available price.
        </span>
        {this.renderErrors()}
          <input
            type="button"
            value="Submit"
            onClick={this.processTrade}
            className="button"
          />
      </div>
    );
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};
    if (keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
    }
  }

  disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefaultForScrollKeys;
  }

  enableScroll() {
      if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
  }

  render() {
    const { loading, company, user } = this.props;
    const { numShares,lightBox, modalClose, tradeMethod, modalClass } = this.state;
    const method = tradeMethod.charAt(0).toUpperCase() + tradeMethod.slice(1);
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="sidebar-container">
          <div className={ lightBox } onClick={ this.closeModal }/>
          <div className={ modalClass }>
            <div className="stock-form-header">
              <h4>{method} {company.symbol}</h4>
              <h4 className={ modalClose } onClick={ this.closeModal }>&#10006;</h4>
            </div>
            <div className="stock-current">
              <span>Current portfolio</span>
            <span>{company.num_shares} shares</span>
            </div>
            <div className="stock-form-main">
              <div className="stock-form-detail-container">
                <span className="stock-form-label">Shares of { company.symbol }</span>
                <input
                  type="text"
                  value={ this.state.numShares.replace(/[^0-9]/g,'') }
                  onChange={ this.update('numShares') }
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
            {this.renderModal()}
            <span className="user-available-cash">
              <strong>${stringifyToFloat(user.cash_value)}</strong> Available
            </span>
          </div>
        </div>
      );
    }
  }
}

export default Chart;
