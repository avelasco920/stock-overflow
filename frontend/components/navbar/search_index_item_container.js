import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchCompanies,
  fetchCompany
} from '../../actions/companies_actions';

import SearchIndexItem from './search_index_item';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    companiesInvested: selectSearchResults(state),
    loading: state.ui.loading.indexLoading,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndexItem));
