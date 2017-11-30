export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_TRADE_EVENT_ERRORS = 'RECEIVE_TRADE_EVENT_ERRORS';
export const RESET_ERRORS = 'RESET_ERRORS';

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const clearSessionErrors = errors => dispatch => (
  dispatch(receiveSessionErrors([]))
);

export const clearTradeEventErrors = () => dispatch => (
  dispatch(resetErrors())
);
