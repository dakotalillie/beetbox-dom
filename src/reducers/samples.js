import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_SAMPLE,
  RECEIVE_DELETED_SAMPLES
} from '../actions/actionTypes';

const samples = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.samples) {
        return action.payload.entities.samples;
      } else {
        return state;
      }
    case RECEIVE_ADDED_SAMPLE:
      newState = { ...state };
      newState[action.payload.sample.id] = action.payload.sample;
      return newState;
    case RECEIVE_DELETED_SAMPLES:
      newState = { ...state };
      for (let id of action.payload.sampleIds) {
        delete newState[id];
      }
      return newState;
    default:
      return state;
  }
};

export default samples;
