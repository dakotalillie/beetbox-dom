import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const libraries = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.entities.libraries;
    default:
      return state;
  }
};

export default libraries;
