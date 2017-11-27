import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';


class Chart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
  }

  render() {
    const { user } = this.props;
    return (
      <div className="chart">
        <img
          src="https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true"
          className="chart-placeholder"/>
      </div>
    );
  }
}

export default Chart;
