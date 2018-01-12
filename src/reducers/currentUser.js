import {
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  NO_TOKEN
} from '../actions/actionTypes';

const currentUser = (state = { loading: true }, action) => {
  switch (action.type) {
    case NO_TOKEN:
      return { loading: false };
    case REQUEST_CURRENT_USER:
      return { loading: true };
    case RECEIVE_CURRENT_USER:
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
      return {
        id: action.payload.id,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        loading: false
      };
    default:
      return state;
  }
};

export default currentUser;
