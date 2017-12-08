import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCurrentCompany } from '../../reducers/selectors';
import { makeTrade } from '../../actions/trade_events_actions';
import { clearTradeEventErrors } from '../../actions/errors_actions';
import StockForm from './stock_form';

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;
  return {
    user: state.session.currentUser,
    company: selectCurrentCompany(state),
    companyStockData: state.entities.chart[symbol],
    companyLoading: state.ui.loading.detailLoading,
    intradayLoading: state.ui.loading.intradayApiLoading,
    errors: state.errors.tradeEvent
  };
};

const mapDispatchToProps = dispatch => ({
  makeTrade: (id, event) => dispatch(makeTrade(id, event)),
  clearTradeEventErrors: errors => dispatch(clearTradeEventErrors(errors)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockForm)
);
