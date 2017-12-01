import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlayContainer from './chart_overlay_container';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green1.png?raw=true",
      activeId: "1",
    };
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(strNum) {
    const url = `https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green${strNum}.png?raw=true`;
    this.setState({ imgUrl: url, activeId: strNum });
  }

  render() {
    const { loading, company } = this.props;
    const { imgUrl } = this.state;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="chart">
          <ChartOverlayContainer changeActive={this.changeActive}/>
          <img
            src={imgUrl}
            className="chart-placeholder"/>
        </div>
      );
    }
  }
}

export default Chart;
