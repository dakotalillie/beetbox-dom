import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const tags = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.tags) {
        return action.payload.entities.tags;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default tags;
