import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './app';
import {
  fetchCompanies,
  fetchIntradayStockPrices,
  fetchDailyStockPrices,
  clearCompanies,
  clearRealtimeData
} from '../actions/companies_actions';
import { getSymbols } from '../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => {
  // const symbols = getSymbols(state);
  return {
    companies: state.entities.companies,
    user: state.session.currentUser,
    symbols: getSymbols(state),
    dataForChart: state.entities.chart
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanies: () => dispatch(fetchCompanies()),
  fetchIntradayStockPrices: sym => dispatch(fetchIntradayStockPrices(sym)),
  fetchDailyStockPrices: sym => dispatch(fetchDailyStockPrices(sym)),
  clearCompanies: () => dispatch(clearCompanies()),
  clearRealtimeData: () => dispatch(clearRealtimeData()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
