export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_TRADE_EVENT_ERRORS = 'RECEIVE_TRADE_EVENT_ERRORS';

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveTradeEventErrors = errors => ({
  type: RECEIVE_TRADE_EVENT_ERRORS,
  errors
});

export const clearSessionErrors = errors => dispatch => (
  dispatch(receiveSessionErrors([]))
);

export const clearTradeEventErrors = () => dispatch => (
  dispatch(receiveTradeEventErrors([]))
);
