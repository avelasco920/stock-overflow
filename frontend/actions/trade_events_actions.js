import * as APIUtil from '../util/watchlist_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const makeTrade = (id, event) => dispatch => {
  return APIUtil.makeTrade(id, event)
    .then((payload) => (
      dispatch(receiveCurrentUser(payload.current_user))
    )
    .then(() => (
      dispatch(receiveCompany(payload.company))
    ))
  );
};
