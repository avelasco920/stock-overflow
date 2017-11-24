import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <MainContent />
        <SideBar />
      </div>
    );
  }
}

export default HomePage;
