import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import WatchlistIndexItem from './watchlist_index_item';
import LoadingIcon from '../loading_icon';

class WatchlistIndex extends React.Component {
  render() {
    const {companiesWatching, loading } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        loading ?
        <div></div> :
        <div className="stock-index">
          <h4 className="sidebar-header">
            Watchlist
          </h4>
          <ul id="sidebar-ul">
            {companiesWatching.map(company =>
              <WatchlistIndexItem
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

export default WatchlistIndex;
