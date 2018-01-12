import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const samples = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.entities.samples;
    default:
      return state;
  }
};

export default samples;
