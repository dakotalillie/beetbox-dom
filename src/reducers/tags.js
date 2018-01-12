import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const tags = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.entities.tags;
    default:
      return state;
  }
};

export default tags;
