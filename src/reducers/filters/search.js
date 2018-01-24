import { SET_SAMPLE_SEARCH, RESET_FILTERS } from '../../constants/actionTypes';

const search = (state = '', action) => {
  switch (action.type) {
    case SET_SAMPLE_SEARCH:
      return action.payload.value;
    case RESET_FILTERS:
      return '';
    default:
      return state;
  }
};

export default search;
