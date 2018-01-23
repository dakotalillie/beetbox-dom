import { CHANGE_TAGS } from '../../constants/actionTypes';

const tags = (state = [], action) => {
  switch (action.type) {
    case CHANGE_TAGS:
      return action.payload.tags;
    default:
      return state;
  }
};

export default tags;
