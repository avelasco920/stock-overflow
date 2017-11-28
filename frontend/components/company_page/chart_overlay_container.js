import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ChartOverlay from './chart_overlay';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';
import { selectCurrentCompany } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser,
    company: selectCurrentCompany(state),
    watching: selectCurrentCompany(state).current_user_watching,
    loading: state.ui.loading.detailLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartOverlay)
);
