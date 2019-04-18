import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchIntradayStockPrices,
  fetchDailyStockPrices,
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
  fetchIntradayStockPrices: sym => dispatch(fetchIntradayStockPrices(sym)),
  fetchDailyStockPrices: sym => dispatch(fetchDailyStockPrices(sym))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
