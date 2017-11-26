import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockIndexContainer from './stock_index_container';
import WatchlistContainer from './watchlist_index_container';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <StockIndexContainer />
          <WatchlistContainer />
        </div>
      </div>
    );
  }
}

export default SideBar;
