import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_FOLDER,
  RECEIVE_EDITED_FOLDER,
  RECEIVE_DELETED_FOLDER
} from '../constants/actionTypes';

const folders = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.folders) {
        return action.payload.entities.folders;
      } else {
        return state;
      }
    case RECEIVE_ADDED_FOLDER:
      newState[action.payload.folder.id] = action.payload.folder;
      return newState;
    case RECEIVE_EDITED_FOLDER:
      newState[action.payload.folder.id] = action.payload.folder;
      return newState;
    case RECEIVE_DELETED_FOLDER:
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

export default folders;
