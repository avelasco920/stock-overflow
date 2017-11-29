import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCurrentCompany } from '../../reducers/selectors';
import { makeTrade } from '../../actions/trade_events_actions';
import StockForm from './stock_form';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser,
    company: selectCurrentCompany(state),
    loading: state.ui.loading.detailLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  makeTrade: (id, event) => dispatch(makeTrade(id, event)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockForm)
);
