import { CHANGE_KEY, RESET_FILTERS } from '../../constants/actionTypes';

const key = (state = [], action) => {
  switch (action.type) {
    case CHANGE_KEY:
      if (state.includes(action.payload.key)) {
        return state.filter(key => key !== action.payload.key);
      } else {
        return [...state, action.payload.key];
      }
    case RESET_FILTERS:
      return [];
    default:
      return state;
  }
};

export default key;
