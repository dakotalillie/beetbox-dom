import {
  SELECT_SAMPLE,
  TOGGLE_ALL_SAMPLES_SELECT,
  RECEIVE_DELETED_SAMPLES,
  SELECT_MULTIPLE_SAMPLES
} from '../constants/actionTypes';

const selectedSamples = (state = [], action) => {
  let newState;
  switch (action.type) {
    case SELECT_SAMPLE:
      return [action.payload.id];
    case SELECT_MULTIPLE_SAMPLES:
      return action.payload.ids;
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
