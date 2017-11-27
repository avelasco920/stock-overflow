import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CompanyPage from './company_page';
import { fetchCompany } from '../../actions/companies_actions';

const mapStateToProps = state => {
  return {
    companies: state.entities.companies,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompany: (id) => dispatch(fetchCompany(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPage));
