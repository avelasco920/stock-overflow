import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';
import Footer from '../footer/footer';

class HomePage extends React.Component {
  render() {
    return (
      <div className="outer">
        <div className="page">
          <MainContent />
          <SideBar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
