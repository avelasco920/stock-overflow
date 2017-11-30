import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchCompanies,
  fetchCompany
  // stockIndexHasMounted
} from '../../actions/companies_actions';

import SearchIndexItem from './search_index_item';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    companiesInvested: selectSearchResults(state),
    loading: state.ui.loading.indexLoading,
    // stockIndexLoading: state.ui.loading.stockIndexLoading
  };
};

const mapDispatchToProps = dispatch => ({
  // stockIndexHasMounted: () => dispatch(stockIndexHasMounted())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndexItem));
