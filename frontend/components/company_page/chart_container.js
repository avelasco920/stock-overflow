import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ChartComponent from './chart';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';

const mapStateToProps = state => {
  return {
    // user: state.session.currentUser,
    loading: state.ui.loading.detailLoading,
    // chartData: state.entities.chart,
  };
};

const mapDispatchToProps = dispatch => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
