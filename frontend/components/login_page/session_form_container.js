import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/errors_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearSessionErrors: errors => dispatch(clearSessionErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
