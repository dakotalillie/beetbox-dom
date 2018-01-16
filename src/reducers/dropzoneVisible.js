import { TOGGLE_DROPZONE } from '../actions/actionTypes';

const dropzoneVisible = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DROPZONE:
      return !state;
    default:
      return state;
  }
};

export default dropzoneVisible;
