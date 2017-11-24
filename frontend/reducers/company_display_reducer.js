import {
  RECEIVE_COMPANY
} from '../actions/companies_actions';

const companyDisplayReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMPANY:
      return action.payload.company.id;
    default:
      return state;
  }
};

export default companyDisplayReducer;
