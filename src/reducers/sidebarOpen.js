import { TOGGLE_SIDEBAR, TOGGLE_RIGHT_SIDEBAR } from '../constants/actionTypes';

const sidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    case TOGGLE_RIGHT_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export default sidebarOpen;
