import { CHANGE_CATEGORY } from '../../constants/actionTypes';

const category = (state = { type: 'all', details: [] }, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default category;
