import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';

class StockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numShares: "",
      status: "initial",
      lightBox: ".light-box-hide",
      modalClose: "hidden",
      tradeMethod: "",
      modalClass: "sidebar",
    };
    this.processing = false;
    this.processTrade = this.processTrade.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearTradeEventErrors();
    this.activateScroll();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.companyLoading) {
      this.setState({
        currentPrice: nextProps.company.market_price,
      });
    }
    if (nextProps.companyStockData && nextProps.companyStockData.intraday) {
      const prices = nextProps.companyStockData.intraday.prices;
      this.setState({
        currentPrice: parseFloat(prices[prices.length - 1]),
      });
    }
  }

  renderReviewProcess() {
    if (this.state.status === "initial") {
      return this.renderInitial();
    } else if (this.state.status === "review") {
      return this.renderReview();
    } else if (this.state.status === "submit") {
      return this.renderSubmit();
    } else if (this.state.status === "processing") {
      return this.renderProcessing();
    } else if (this.state.status === "complete") {
      return this.renderComplete();
    }
  }

  changeState(method) {
    if (this.state.status === "initial") {
      this.setState({
        status: "submit",
        lightBox: "light-box",
        modalClose: "modal-close",
        tradeMethod: method,
        modalClass: "stock-form"
      });
    } else if (this.state.status === "submit") {
      this.props.clearTradeEventErrors();
      this.processing = false;
      this.setState({
        status: "processing",
      });
    } else if (this.state.status === "processing") {
      let newStatus = (this.props.errors.length > 0) ? "submit" : "complete";
      this.setState({
        status: newStatus
      });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  processTrade() {
    if (this.processing) {
      return undefined;
    } else {
      this.processing = true;
      const id = this.props.company.id;
      let event = {
        trade_event: {
          num_shares: this.state.numShares,
          trade_type: this.state.tradeMethod
        }
      };
      this.props.makeTrade(id, event)
        .then(() => this.changeState());
    }
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

  closeModal() {
    if (this.state.status === "processing") {
      return "";
    } else {
      this.props.clearTradeEventErrors();
      this.processing = false;
      this.activateScroll();
      this.setState({
        status: "initial",
        lightBox: "",
        modalClose: "hidden",
        tradeMethod: "",
        modalClass: "sidebar"
      });
    }
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

  disableScroll() {
    const body = document.body;
    body.style = 'overflow: hidden';
    body.scroll = 'no';
  }

  activateScroll() {
    const body = document.body;
    body.style = 'overflow: visible';
    body.scroll = 'yes';
  }

  renderSubmit() {
    const { company } = this.props;
    const { currentPrice } = this.state;
    const shares = `${this.state.numShares}`;
    const symbol = company.symbol;
    const { tradeMethod, numShares } = this.state;
    const totalPrice = stringifyToFloat(numShares * currentPrice);
    let shareDesc;
    this.disableScroll();
    if (this.state.numShares === 1) {
      shareDesc = "share";
    } else {
      shareDesc = "shares";
    }
    return (
      <div className="order-summary">
        <h4>Order Summary</h4>
        <span className="order-summary-text">
          You are about to
          submit an order for <strong>{shares} {shareDesc}
          </strong> to <strong>{ tradeMethod }</strong> <strong>
          {symbol} </strong> for <strong>${totalPrice}</strong>.
          This order will execute at the best available price.
        </span>
        {this.renderErrors()}
          <input
            type="button"
            value="Submit"
            onClick={() => this.changeState()}
            className="button"
          />
      </div>
    );
  }

  renderProcessing() {
    window.setTimeout(() => this.processTrade(), 300);
    return(
      <div className="stock-form-processing">
        <div className="stock-processing-icon">Processing...</div>
        <h4>Processing...</h4>
      </div>
    );
  }

  renderComplete() {
    let method;
    let methodSummary;
    if (this.state.tradeMethod === "buy") {
      method = "SHARES BOUGHT";
      methodSummary = "bought";
    } else if (this.state.tradeMethod === "sell") {
      method = "SHARES SOLD";
      methodSummary = "sold";
    }

    const { company } = this.props;
    const { numShares, currentPrice } = this.state;
    const totalCost = stringifyToFloat(numShares * currentPrice);
    let shareDesc;
    if (company.num_shares === 1) {
      shareDesc = "share";
    } else {
      shareDesc = "shares";
    }
    const totalCostInt = totalCost.split('.')[0];
    const totalCostDec = totalCost.split('.')[1];
    return (
      <div className="stock-form-complete">
        <h4 className="completed-header">Trade Complete!</h4>
        <div className="completed-stats-summary">
          <div className="completed-stats">
            <h1>{numShares}</h1>
            <span className="completed-desc">{method}</span>
          </div>
          <div className="completed-stats">
            <div>
              <span className="small">$</span>
              <h1>{totalCostInt}</h1>
              <span className="small">.{totalCostDec}</span>
            </div>
            <span className="completed-desc">TOTAL COST</span>
          </div>
        </div>
        <div className="completed-bottom">
          <div className="completed-stocks-update">
            <span>You now have {company.num_shares} {shareDesc} of {company.symbol}.</span>
          </div>
          <div className="completed-buttons">
            <Link to='/' className="completed-home-button">
              <input
                type="button"
                value="OK"
                className="button"
              />
            </Link>
            <Link to='/account' className="completed-account-button">
              <input
                type="button"
                value="Account"
                className="button"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { companyLoading, company, companyStockData, intradayLoading, user } = this.props;
    const { numShares,lightBox, modalClose, tradeMethod, modalClass, currentPrice } = this.state;
    const method = tradeMethod.charAt(0).toUpperCase() + tradeMethod.slice(1);
    if (companyLoading) {
      return (<div></div>);
    } else {
      let shareDesc;
      if (company.num_shares === 1) {
        shareDesc = "share";
      } else {
        shareDesc = "shares";
      }
      let marketPrice;
      if (intradayLoading) {
        marketPrice = company.market_price;
      } else {
        marketPrice = currentPrice;
      }
      return (
        <div className="sidebar-container">
          <div className={ lightBox } onClick={ this.closeModal }/>
          <div className={ modalClass }>
            <div className="stock-form-header">
              <h4>{ method } {company.symbol}</h4>
              <h4 className={ modalClose } onClick={ this.closeModal }>&#10006;</h4>
            </div>
            <div className="stock-current">
              <span>Current portfolio</span>
              <span>{company.num_shares} {shareDesc}</span>
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
                <span className="stock-form-detail">${stringifyToFloat(marketPrice)}</span>
              </div>
              <div className="stock-form-detail-container">
                <span className="stock-form-label" id="stock-total">Estimated Cost</span>
                <span className="stock-form-detail" id="stock-total">
                  ${stringifyToFloat(numShares * marketPrice)}
                </span>
              </div>
            </div>
            {this.renderReviewProcess()}
            <span className="user-available-cash">
              <strong>${stringifyToFloat(user.cash_value)}</strong> Available
            </span>
          </div>
        </div>
      );
    }
  }
}

export default StockForm;
