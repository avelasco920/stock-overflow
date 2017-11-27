import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { convertCompanySymToId } from '../../reducers/selectors';
import MainContent from './main_content';
import SideBar from './sidebar';

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const companyId = convertCompanySymToId(
        this.props.companies, this.props.match.params.symbol
    );
    this.props.fetchCompany(companyId);
  }

  render() {
    return (
      <div className="page">
        <MainContent />
        <SideBar />
      </div>
    );
  }
}

export default CompanyPage;
