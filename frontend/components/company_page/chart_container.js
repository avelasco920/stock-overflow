import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRealtimeIntradayData } from '../../actions/companies_actions';
import ChartComponent from './chart';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    symbol: ownProps.match.params.symbol,
    chartData: state.entities.chart,
    loading: state.ui.loading.detailLoading,
    // chartData: state.entities.chart,
  };
};

const mapDispatchToProps = dispatch => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id)),
  fetchRealtimeIntradayData: sym => dispatch(fetchRealtimeIntradayData(sym))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
