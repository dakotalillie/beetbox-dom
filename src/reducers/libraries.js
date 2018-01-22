import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_LIBRARY,
  RECEIVE_DELETED_LIBRARY,
  RECEIVE_EDITED_LIBRARY
} from '../actions/actionTypes';

const libraries = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.libraries) {
        return action.payload.entities.libraries;
      } else {
        return state;
      }
    case RECEIVE_ADDED_LIBRARY:
      newState[action.payload.library.id] = action.payload.library;
      return newState;
    case RECEIVE_DELETED_LIBRARY:
      delete newState[action.payload.id];
      return newState;
    case RECEIVE_EDITED_LIBRARY:
      newState[action.payload.library.id] = action.payload.library;
      return newState;
    default:
      return state;
  }
};

export default libraries;
