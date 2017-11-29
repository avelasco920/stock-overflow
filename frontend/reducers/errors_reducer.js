import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import tradeEventErrorsReducer from './trade_event_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tradeEvent: tradeEventErrorsReducer,
});

export default errorsReducer;
