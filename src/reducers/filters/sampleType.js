import { CHANGE_SAMPLE_TYPE } from '../../constants/actionTypes';

const sampleType = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SAMPLE_TYPE:
      if (action.payload.type === state) return '';
      else return action.payload.type;
    default:
      return state;
  }
};

export default sampleType;
