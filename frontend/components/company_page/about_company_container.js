import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AboutCompany from './about_company';
import { selectCurrentCompany } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    company: selectCurrentCompany(state),
    loading: state.ui.loading.detailLoading,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AboutCompany)
);
