import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MainContent from './main_content';
import SideBar from './sidebar';

class CompanyPage extends React.Component {
  componentWillMount() {
    this.props.fetchCompanies();
  }

  render() {
    const companySymbol = this.props.match.params.symbol;
    return (
      <div className="page">
        <MainContent companySymbol={companySymbol}/>
      <SideBar companySymbol={companySymbol}/>
      </div>
    );
  }
}

export default CompanyPage;
