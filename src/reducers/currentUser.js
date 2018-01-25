import {
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  LOGIN_ERROR,
  NO_TOKEN,
  RESET_ERROR
} from '../constants/actionTypes';

const currentUser = (state = { loading: true }, action) => {
  switch (action.type) {
    case NO_TOKEN:
    case RESET_ERROR:
      return { loading: false };
    case REQUEST_CURRENT_USER:
      return { loading: true };
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.user.token) {
        localStorage.setItem('token', action.payload.entities.user.token);
      }
      return { ...action.payload.entities.user, loading: false };
    case LOGIN_ERROR:
      return { loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default currentUser;
