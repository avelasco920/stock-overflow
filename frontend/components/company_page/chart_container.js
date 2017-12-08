import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchRealtimeIntradayData,
  fetchRealtimeDailyData,
} from '../../actions/companies_actions';
import ChartComponent from './chart';
import {
  watchCompany,
  unwatchCompany
} from '../../actions/watchlist_actions';

const mapStateToProps = (state, ownProps) => {
  // const symbol = ownProps.match.params.symbol;
  return {
    companyStockData: state.entities.chart[ownProps.match.params.symbol],
    companyLoading: state.ui.loading.detailLoading,
    intradayApiLoading: state.ui.loading.intradayApiLoading,
    dailyApiLoading: state.ui.loading.dailyApiLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id)),
  fetchRealtimeIntradayData: sym => dispatch(fetchRealtimeIntradayData(sym)),
  fetchRealtimeDailyData: sym => dispatch(fetchRealtimeDailyData(sym))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
