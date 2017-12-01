import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import ChartOverlay from './chart_overlay';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green3.png?raw=true",
    };
  }

  changeImage(num) {
    const imgs = {
      1: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green2.png?raw=true",
      2: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green3.png?raw=true",
      4: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green4.png?raw=true",
      5: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green5.png?raw=true",
      6: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green6.png?raw=true",
      7: "https://github.com/avelasco920/stocks-overflow/blob/master/app/assets/images/chart%20thumbnail/green7.png?raw=true",
    };
    this.setState({imgUrl: imgs[num]});
  }

  render() {
    const { user } = this.props;
    const { imgUrl } = this.state;
    return (
      <div className="chart">
        <ChartOverlay user={user}/>
        <img
          src={imgUrl}
          className="chart-placeholder"/>
      </div>
    );
  }
}

export default Chart;
