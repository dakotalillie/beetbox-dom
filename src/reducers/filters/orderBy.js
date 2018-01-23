import { REORDER_SAMPLES } from '../../constants/actionTypes';

const orderBy = (state = { column: 'name', direction: 'asc' }, action) => {
  switch (action.type) {
    case REORDER_SAMPLES:
      return action.payload;
    default:
      return state;
  }
};

export default orderBy;
