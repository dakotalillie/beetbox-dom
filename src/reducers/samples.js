import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_SAMPLES
} from '../actions/actionTypes';

const samples = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.samples) {
        return action.payload.entities.samples;
      } else {
        return state;
      }
    case RECEIVE_ADDED_SAMPLES:
      const newState = { ...state };
      for (let sample of action.payload) {
        newState[sample.id] = sample;
      }
      return newState;
    default:
      return state;
  }
};

export default samples;
