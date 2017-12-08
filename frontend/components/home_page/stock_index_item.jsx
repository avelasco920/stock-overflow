import React from 'react';
import CompanyPage from '../company_page/company_page';
import { ProtectedRoute } from '../../util/route_util';
import { Link } from 'react-router-dom';
import { stringifyToFloatNoCommas } from '../../util/parsing_functions';
import CompanyPageContainer from '../company_page/company_page_container';

const StockIndexItem = ({ company }) => {
  const graphUrl = [
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green3.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green4.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green5.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green6.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green7.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green8.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red1.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red2.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red3.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red4.png?raw=true",
    "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/red5.png?raw=true",
  ];
  const randGraph = graphUrl[Math.floor(Math.random() * graphUrl.length)];
  const companyUrl = `/company/${company.symbol}`;
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
          ${stringifyToFloatNoCommas(company.market_price)}
        </span>
      </li>
      <ProtectedRoute exact path={companyUrl} component={CompanyPageContainer} />
    </Link>
  );
};

export default StockIndexItem;
