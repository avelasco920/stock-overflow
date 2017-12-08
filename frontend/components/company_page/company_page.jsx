import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { convertCompanySymToId } from '../../reducers/selectors';
import MainContent from './main_content';
import StockFormContainer from './stock_form_container';
import Footer from '../footer/footer';

class CompanyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { symbol } = this.props.match.params;
    const companyId = convertCompanySymToId(
        this.props.companies, symbol
    );
    this.props.fetchCompany(companyId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.symbol !== this.props.match.params.symbol) {
      const companyId = convertCompanySymToId(
          nextProps.companies, nextProps.match.params.symbol
      );
      this.props.fetchCompany(companyId);
    }
  }

  render() {
    return (
      <div className="outer">
        <div className="page">
          <MainContent />
          <StockFormContainer />
        </div>
        <Footer />


      </div>
    );
  }
}

export default CompanyPage;
