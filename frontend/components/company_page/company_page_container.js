import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchCompanies,
} from '../../actions/companies_actions';

import CompanyPage from './company_page';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPage));
