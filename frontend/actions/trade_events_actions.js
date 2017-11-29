import * as APIUtil from '../util/trade_events_api_util';

export const RECEIVE_TRADE_EVENT = 'RECEIVE_TRADE_EVENT';
export const RECEIVE_TRADE_EVENT_ERRORS = 'RECEIVE_TRADE_EVENT_ERRORS';

export const receiveTradeEvent = payload => ({
  type: RECEIVE_TRADE_EVENT,
  payload
});

export const receiveTradeEventErrors = errors => ({
  type: RECEIVE_TRADE_EVENT_ERRORS,
  errors
});

export const makeTrade = (id, event) => dispatch => {
  return APIUtil.makeTrade(id, event)
    .then((payload) => (
      dispatch(receiveTradeEvent(payload))
    ), err => (
      dispatch(receiveTradeEventErrors(err.responseText))
    )
  );
};
