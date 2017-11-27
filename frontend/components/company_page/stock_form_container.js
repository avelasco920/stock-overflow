import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StockForm from './stock_form';
import { selectCurrentCompany } from '../../reducers/selectors';

const mapStateToProps = ( state ) => {
  return {
    user: state.session.currentUser,
    company: selectCurrentCompany(state),
    loading: state.ui.loading.detailLoading,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockForm)
);
