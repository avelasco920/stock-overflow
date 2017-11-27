import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class Chart extends React.Component {
  render() {
    const { loading, company, user } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="stock-form">
          <h4> Stock Form </h4>
        </div>
      );
    }
  }
}

export default Chart;
