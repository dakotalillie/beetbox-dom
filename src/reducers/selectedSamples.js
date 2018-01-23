import {
  TOGGLE_SAMPLE_SELECT,
  TOGGLE_ALL_SAMPLES_SELECT,
  RECEIVE_DELETED_SAMPLES
} from '../constants/actionTypes';

const selectedSamples = (state = [], action) => {
  let newState;
  switch (action.type) {
    case TOGGLE_SAMPLE_SELECT:
      if (state.find(id => id === action.payload.id)) {
        return state.filter(id => id !== action.payload.id);
      } else {
        return [...state, action.payload.id];
      }
    case TOGGLE_ALL_SAMPLES_SELECT:
      if (state.length) {
        return [];
      } else {
        return action.payload.ids;
      }
    case RECEIVE_DELETED_SAMPLES:
      newState = [...state];
      action.payload.sampleIds.forEach(id => {
        const index = newState.findIndex(sample => sample.id === id);
        newState.splice(index, 1);
      });
      return newState;
    default:
      return state;
  }
};

export default selectedSamples;
