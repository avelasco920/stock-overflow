import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import StockFormContainer from './stock_form_container';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

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
