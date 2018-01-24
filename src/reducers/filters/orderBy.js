import { REORDER_SAMPLES, RESET_FILTERS } from '../../constants/actionTypes';

const defaultState = { column: 'name', direction: 'asc' };

const orderBy = (state = defaultState, action) => {
  switch (action.type) {
    case REORDER_SAMPLES:
      return action.payload;
    case RESET_FILTERS:
      return defaultState;
    default:
      return state;
  }
};

export default orderBy;
