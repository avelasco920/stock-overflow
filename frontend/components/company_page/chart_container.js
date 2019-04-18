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
  const symbol = ownProps.match.params.symbol;
  return {
    companyStockPrices: state.entities.chart[symbol],
    companyLoading: state.ui.loading.detailLoading,
    intradayApiLoading: state.ui.loading.intradayApiLoading,
    dailyApiLoading: state.ui.loading.dailyApiLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  watchCompany: id => dispatch(watchCompany(id)),
  unwatchCompany: id => dispatch(unwatchCompany(id)),
  fetchIntradayStockPrices: (symbol) => dispatch(fetchIntradayStockPrices(symbol)),
  fetchDailyStockPrices: (symbol) => dispatch(fetchDailyStockPrices(symbol))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChartComponent)
);
