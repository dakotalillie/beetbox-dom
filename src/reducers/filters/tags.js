import { CHANGE_TAGS, RESET_FILTERS } from '../../constants/actionTypes';

const tags = (state = [], action) => {
  switch (action.type) {
    case CHANGE_TAGS:
      return action.payload.tags;
    case RESET_FILTERS:
      return [];
    default:
      return state;
  }
};

export default tags;
