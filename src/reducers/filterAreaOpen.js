import { TOGGLE_FILTER_AREA } from '../constants/actionTypes';

const filterAreaOpen = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_AREA:
      return !state;
    default:
      return state;
  }
};

export default filterAreaOpen;
