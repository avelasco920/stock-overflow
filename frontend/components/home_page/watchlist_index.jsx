import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import WatchlistIndexItem from './watchlist_index_item';
import LoadingIcon from '../loading_icon';

class WatchlistIndex extends React.Component {
  // constructor() {
  //   super();
  //   this.addingStocks = false;
  //   this.state = {
  //     stocks: [],
  //   };
  // }

  // componentWillReceiveProps(newProps) {
  //   if (!newProps.loadingData
  //     && newProps.companiesWatching[0]
  //     && this.addingStocks === false) {
  //     this.addingStocks = true;
  //     this.addStock(newProps.companiesWatching);
  //   }
  // }
  //
  // addStock(allStocks) {
  //   const currentStocks = this.state.stocks;
  //   currentStocks.push(allStocks[0]);
  //   this.setState({stocks: currentStocks});
  //   if (allStocks.length > 1) {
  //     setTimeout(() => this.addStock(allStocks.slice(1)), 100);
  //   }
  // }

  render() {
    const {companiesWatching, loading } = this.props;
    return (
      loading ?
      <LoadingIcon /> :
      <div className="stock-index">
        <h4 className="sidebar-header">
          Watchlist
        </h4>
        <ul id="sidebar-ul">
          {companiesWatching.map(company =>
            <WatchlistIndexItem
              key={company.id}
              company={company} />
          )}
        </ul>
      </div>
    );
  }
}

export default WatchlistIndex;
