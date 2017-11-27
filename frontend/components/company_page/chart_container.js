import { connect } from 'react-redux';

import Chart from './chart';
import selectCurrentCompany from '../../reducers/selectors';

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
)(Chart);
