import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { convertCompanySymToId } from '../../reducers/selectors';
import MainContent from './main_content';
import StockFormContainer from './stock_form_container';

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
        <StockFormContainer />
      </div>
    );
  }
}

export default CompanyPage;
