import { connect } from 'react-redux';

import { fetchCompanies } from '../../actions/companies_actions';
import StockIndex from './stock_index';
import {
  selectInvestedCompanies,
  selectWatchingCompanies
} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    companiesInvested: selectInvestedCompanies(state),
    companiesWatching: selectWatchingCompanies(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockIndex);
