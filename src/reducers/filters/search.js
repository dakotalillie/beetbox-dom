import { SET_SAMPLE_SEARCH } from '../../constants/actionTypes';

const search = (state = '', action) => {
  switch (action.type) {
    case SET_SAMPLE_SEARCH:
      return action.payload.value;
    default:
      return state;
  }
};

export default search;
