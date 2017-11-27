import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './app';
import { fetchCompanies } from '../actions/companies_actions';

const mapStateToProps = ( state, ownProps ) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
