import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_SAMPLE,
  RECEIVE_EDITED_SAMPLES,
  RECEIVE_DELETED_SAMPLES
} from '../constants/actionTypes';

const samples = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.samples) {
        return action.payload.entities.samples;
      } else {
        return state;
      }
    case RECEIVE_ADDED_SAMPLE:
      newState[action.payload.sample.id] = action.payload.sample;
      return newState;
    case RECEIVE_EDITED_SAMPLES:
      for (let sample of action.payload.samples) {
        newState[sample.id] = sample;
      }
      return newState;
    case RECEIVE_DELETED_SAMPLES:
      for (let sample of action.payload.samples) {
        delete newState[sample.id];
      }
      return newState;
    default:
      return state;
  }
};

export default samples;
