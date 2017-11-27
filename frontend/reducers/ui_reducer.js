import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import errors from './errors_reducer';
import loading from './loading_reducer';
import companyDisplay from './company_display_reducer';

export default combineReducers({
  errors,
  loading,
  companyDisplay
});
