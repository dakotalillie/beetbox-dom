import { CHANGE_RATING, RESET_FILTERS } from '../../constants/actionTypes';

const rating = (state = [], action) => {
  switch (action.type) {
    case CHANGE_RATING:
      if (state.includes(action.payload.rating)) {
        return state.filter(rating => rating !== action.payload.rating);
      } else {
        return [...state, action.payload.rating];
      }
    case RESET_FILTERS:
      return [];
    default:
      return state;
  }
};

export default rating;
