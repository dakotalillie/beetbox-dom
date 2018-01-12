import { SET_SAMPLE_SEARCH } from '../actions/actionTypes';

const sampleSearch = (state = '', action) => {
  switch (action.type) {
    case SET_SAMPLE_SEARCH:
      return action.payload.value;
    default:
      return state;
  }
};

export default sampleSearch;
