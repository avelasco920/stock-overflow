import { connect } from 'react-redux';

import { fetchCompanies, fetchCompany } from '../../actions/companies_actions';
import WatchlistIndex from './watchlist_index';
import {
  selectWatchingCompanies
} from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    companiesWatching: selectWatchingCompanies(state),
    loading: state.ui.loading.indexLoading,
    // stockIndexLoading: state.ui.loading.stockIndexLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchCompany: id => dispatch(fetchCompany(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistIndex);