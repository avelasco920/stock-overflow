import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';

class CompanyPage extends React.Component {
  render() {
    return (
      <div className="page">
        <MainContent />
        <h2>CompanyPage</h2>
        <SideBar />
      </div>
    );
  }
}

export default CompanyPage;
