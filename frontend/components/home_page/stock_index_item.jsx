import React from 'react';
import CompanyPage from '../company_page/company_page';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';
import { stringifyIntegerNoCommas } from '../../util/parsing_functions';

const StockIndexItem = ({ company }) => {
  const graphUrl = [
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green3.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red3.png?raw=true",
  ];
  const randGraph = graphUrl[Math.floor(Math.random() * graphUrl.length)];
  const companyUrl = `/company/${ company.symbol }`;
  return (
    <Link to={companyUrl}>
      <li className="stock-index-item">
        <div className="stock-text">
          <h4 className="stock-symbol">{company.symbol}</h4>
          <span className="stock-num-shares">{company.num_shares} Shares</span>
        </div>
        <img
          src={randGraph}
          className="chart-thumb"/>
        <span className="stock-price">
          ${stringifyIntegerNoCommas(company.market_price)}
        </span>
      </li>
    </Link>
  );
};

export default StockIndexItem;
