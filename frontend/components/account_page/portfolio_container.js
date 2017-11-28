import { connect } from 'react-redux';
import Portfolio from './portfolio';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
