import { TOGGLE_RIGHT_SIDEBAR, TOGGLE_SIDEBAR } from '../constants/actionTypes';

const rightSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_RIGHT_SIDEBAR:
      return !state;
    case TOGGLE_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export default rightSidebarOpen;
