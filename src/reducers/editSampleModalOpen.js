import { TOGGLE_EDIT_SAMPLE_MODAL } from '../actions/actionTypes';

const editSampleModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_SAMPLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default editSampleModalOpen;
