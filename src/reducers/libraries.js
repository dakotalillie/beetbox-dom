import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const libraries = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.libraries) {
        return action.payload.entities.libraries;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default libraries;
