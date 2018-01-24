import { CHANGE_SAMPLE_TYPE, RESET_FILTERS } from '../../constants/actionTypes';

const sampleType = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SAMPLE_TYPE:
      if (action.payload.type === state) return '';
      else return action.payload.type;
    case RESET_FILTERS:
      return '';
    default:
      return state;
  }
};

export default sampleType;
