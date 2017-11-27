import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { convertCompanySymToId } from '../../reducers/selectors';
import MainContent from './main_content';
import SideBar from './sidebar';

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
    };
  }

  componentWillMount() {
    const companyId = convertCompanySymToId(
        this.props.companies, this.props.match.params.symbol
    );
    this.props.fetchCompany(companyId);
  }

  render() {
    const company = this.state.company;
    return (
      <div className="page">
        <MainContent company={company}/>
        <SideBar company={company}/>
      </div>
    );
  }
}

export default CompanyPage;
