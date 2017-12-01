import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchCompanies,
  fetchCompany
} from '../../actions/companies_actions';

import StockIndex from './stock_index';
import {
  selectInvestedCompanies,
  selectWatchingCompanies
} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    companiesInvested: selectInvestedCompanies(state),
    loading: state.ui.loading.indexLoading,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StockIndex));
