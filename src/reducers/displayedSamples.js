import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ADDED_SAMPLES
} from '../actions/actionTypes';

const displayedSamples = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.samples) {
        return Object.keys(action.payload.entities.samples).map(key => {
          return action.payload.entities.samples[key];
        });
      } else {
        return state;
      }
    case RECEIVE_ADDED_SAMPLES:
      const newState = [...state];
      for (let sample of action.payload) {
        newState.push(sample);
      }
      return newState;
    default:
      return state;
  }
};

export default displayedSamples;
