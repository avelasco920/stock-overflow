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
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistIndex);
