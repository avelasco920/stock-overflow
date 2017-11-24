import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockIndexItem from './stock_index_item';

class StockIndex extends React.Component {
  componentWillMount() {
    this.props.fetchCompanies();
  }

  render() {
    return (
      <div className="stock-index">
        <h4 className="sidebar-header">
          Stocks
        </h4>
        <StockIndexItem />
      </div>
    );
  }
}

export default StockIndex;
