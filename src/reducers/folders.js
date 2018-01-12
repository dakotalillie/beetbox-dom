import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const folders = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.entities.folders;
    default:
      return state;
  }
};

export default folders;
