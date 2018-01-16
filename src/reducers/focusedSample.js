import { CHANGE_FOCUSED_SAMPLE } from '../actions/actionTypes';

const folders = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FOCUSED_SAMPLE:
      return action.payload.id;
    default:
      return state;
  }
};

export default folders;
