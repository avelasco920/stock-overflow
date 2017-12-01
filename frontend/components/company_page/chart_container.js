import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Chart from './chart';
import { selectCurrentCompany } from '../../reducers/selectors';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser,
    company: selectCurrentCompany(state),
    loading: state.ui.loading.detailLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Chart)
);
