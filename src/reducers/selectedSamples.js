import {
  TOGGLE_SAMPLE_SELECT,
  TOGGLE_ALL_SAMPLES_SELECT
} from '../actions/actionTypes';

const selectedSamples = (state = [], action) => {
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
    default:
      return state;
  }
};

export default selectedSamples;
