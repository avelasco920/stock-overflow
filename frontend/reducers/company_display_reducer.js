import {
  RECEIVE_COMPANY
} from '../actions/companies_actions';

const defaultState = Object.freeze(
  null
);

const companyDisplayReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.company.id;
    default:
      return state;
  }
};

export default companyDisplayReducer;
