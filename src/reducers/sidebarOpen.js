import { TOGGLE_SIDEBAR } from '../actions/actionTypes';

const sidebarOpen = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default sidebarOpen;
