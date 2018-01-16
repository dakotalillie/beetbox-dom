import { RECEIVE_CURRENT_USER } from '../actions/actionTypes';

const folders = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.folders) {
        return action.payload.entities.folders;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default folders;
