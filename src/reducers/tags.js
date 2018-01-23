import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_TAG,
  RECEIVE_EDITED_TAG,
  RECEIVE_DELETED_TAG,
  UPDATE_TAG_COUNT
} from '../constants/actionTypes';

const tags = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.tags) {
        return action.payload.entities.tags;
      } else {
        return state;
      }
    case RECEIVE_ADDED_TAG:
      newState[action.payload.tag.id] = action.payload.tag;
      return newState;
    case RECEIVE_EDITED_TAG:
      newState[action.payload.tag.id] = action.payload.tag;
      return newState;
    case RECEIVE_DELETED_TAG:
      delete newState[action.payload.id];
      return newState;
    case UPDATE_TAG_COUNT:
      newState[action.payload.tagId].count += action.payload.amount;
      return newState;
    default:
      return state;
  }
};

export default tags;
