import { connect } from 'react-redux';

import { selectCurrentCompany } from '../../reducers/selectors';
import Chart from './chart';

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
