import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="page">
        <MainContent props={this.props} />
        <SideBar props={this.props} />
      </div>
    );
  }

}


export default CompanyPage;
