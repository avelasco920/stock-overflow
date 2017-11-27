import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <MainContent />
        <SideBar />
      </div>
    );
  }
}

export default HomePage;
