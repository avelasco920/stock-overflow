import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import { stringifyInteger } from '../../util/data_to_ui';

class ChartOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="chart-overlay">
        <div className="account-info">
          <h2>{stringifyInteger(user.stocks_value)}</h2>
          <span></span>
        </div>
      </div>
    );
  }
}

export default ChartOverlay;
