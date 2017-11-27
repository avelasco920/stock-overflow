import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockFormContainer from './stock_form';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <StockFormContainer/>
        </div>
      </div>
    );
  }
}

export default SideBar;
