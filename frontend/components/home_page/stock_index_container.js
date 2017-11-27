import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchCompanies,
  fetchCompany
  // stockIndexHasMounted
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
    // stockIndexLoading: state.ui.loading.stockIndexLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: id => dispatch(fetchCompany(id)),
  // stockIndexHasMounted: () => dispatch(stockIndexHasMounted())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StockIndex));
