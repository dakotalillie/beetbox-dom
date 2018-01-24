import { CHANGE_TEMPO, RESET_FILTERS } from '../../constants/actionTypes';

const defaultState = { low: 40, high: 200 };

const tempo = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TEMPO:
      return action.payload;
    case RESET_FILTERS:
      return defaultState;
    default:
      return state;
  }
};

export default tempo;
