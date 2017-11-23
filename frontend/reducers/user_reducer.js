import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
});

const userReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let user = action.currentUser;
      return merge({}, user);
    default:
      return state;
  }
};

export default userReducer;
