import { connect } from 'react-redux';
import { clearSessionErrors } from '../../actions/errors_actions';
import UserForm from './user_form';
import {
  signup,
  login
} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearSessionErrors: errors => dispatch(clearSessionErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
