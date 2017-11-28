import * as APIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ITEM = 'RECEIVE_WATCHLIST_ITEM';

export const receiveWatchlistItem = (company, watching) => ({
  type: RECEIVE_WATCHLIST_ITEM,
  company,
  watching
});

export const watchCompany = id => dispatch => {
  return APIUtil.watchCompany(id)
    .then((company) => (
      dispatch(receiveWatchlistItem(company, true))
    )
  );
};

export const unwatchCompany = id => dispatch => {
  return APIUtil.unwatchCompany(id)
    .then(company => (
      dispatch(receiveWatchlistItem(company, false))
    )
  );
};
