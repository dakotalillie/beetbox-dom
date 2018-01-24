import { CHANGE_INSTRUMENT } from '../../constants/actionTypes';

const instruments = (state = [], action) => {
  switch (action.type) {
    case CHANGE_INSTRUMENT:
      if (state.includes(action.payload.instrument)) {
        return state.filter(
          instrument => instrument !== action.payload.instrument
        );
      } else {
        return [...state, action.payload.instrument];
      }
    default:
      return state;
  }
};

export default instruments;
