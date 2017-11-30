import { connect } from 'react-redux';

import {
  signup,
  login
} from '../../actions/session_actions';

import clearSessionErrors from '../../actions/session_actions';
import {
  searchCompanyDatabase,
  clearSearchResults,
} from '../../actions/company_search_actions';
import SearchBar from './searchbar';
import { selectSearchResults } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    searchResults: selectSearchResults(state),
  };
};

const mapDispatchToProps = dispatch => ({
  searchCompanyDatabase: query => dispatch(searchCompanyDatabase(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
