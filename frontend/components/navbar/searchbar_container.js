import { connect } from 'react-redux';

import {
  signup,
  login,
  clearErrors
} from '../../actions/session_actions';

import SearchBar from './searchbar';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
