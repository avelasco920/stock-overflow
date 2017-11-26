import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockForm from './stock_form';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <StockForm/>
        </div>
      </div>
    );
  }
}

export default SideBar;
