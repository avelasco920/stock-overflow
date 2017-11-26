import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyIntegerNoCommas } from '../../util/parsing_functions';

const WatchlistIndexItem = ({ company }) => {
  const graphUrl = [
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green3.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green4.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red3.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red4.png?raw=true"
  ];
  const randGraph = graphUrl[Math.floor(Math.random() * graphUrl.length)];
  return (
    <li className="stock-index-item">
      <div className="stock-text">
        <h4 className="stock-symbol">{company.symbol}</h4>
      </div>
      <img
        src={randGraph}
        className="chart-thumb"/>
      <span className="stock-price">
        ${stringifyIntegerNoCommas(company.market_price)}
      </span>
    </li>
  );
};

export default WatchlistIndexItem;
