import { TOGGLE_RIGHT_SIDEBAR } from '../constants/actionTypes';

const rightSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_RIGHT_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default rightSidebarOpen;
