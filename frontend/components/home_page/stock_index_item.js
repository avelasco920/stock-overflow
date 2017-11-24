import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

const StockIndexItem = ({ company }) => (
  <li className="stock-index-item">
    <div className="stock-text">
      <h4 className="stock-symbol">{company.symbol}</h4>
    <span className="stock-num-shares">{company.num_shares} Shares</span>
    </div>
      <span className="stock-price">{company.market_price}</span>
  </li>
);

export default StockIndexItem;
