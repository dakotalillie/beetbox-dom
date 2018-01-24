import { CHANGE_CATEGORY, RESET_FILTERS } from '../../constants/actionTypes';

const defaultState = { type: 'all', details: [] };

const category = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.payload;
    case RESET_FILTERS:
      return defaultState;
    default:
      return state;
  }
};

export default category;
