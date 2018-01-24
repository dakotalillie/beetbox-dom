import { CHANGE_GENRE, RESET_FILTERS } from '../../constants/actionTypes';

const genres = (state = [], action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      if (state.includes(action.payload.genre)) {
        return state.filter(genre => genre !== action.payload.genre);
      } else {
        return [...state, action.payload.genre];
      }
    case RESET_FILTERS:
      return [];
    default:
      return state;
  }
};

export default genres;
