import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockIndexItem from './stock_index_item';
import LoadingIcon from '../loading_icon';

class StockIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companiesInvested: this.props.companiesInvested,
      loading: this.props.loading,
    };
  }

  render() {
    const { companiesInvested, loading } = this.state;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="stock-index">
          <h4 className="sidebar-header">Stocks</h4>
          <ul>
            {companiesInvested.map(company =>
              <StockIndexItem
                key={company.id}
                company={company}
              />
            )}
          </ul>
        </div>
      );
    }
  }
}

export default StockIndex;
