import {
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  NO_TOKEN,
  RECEIVE_ADDED_SAMPLES
} from '../actions/actionTypes';

const currentUser = (state = { loading: true }, action) => {
  switch (action.type) {
    case NO_TOKEN:
      return { loading: false };
    case REQUEST_CURRENT_USER:
      return { loading: true };
    case RECEIVE_CURRENT_USER:
      if (action.payload.entities.user.token) {
        localStorage.setItem('token', action.payload.entities.user.token);
      }
      return {
        ...action.payload.entities.user,
        loading: false
      };
    case RECEIVE_ADDED_SAMPLES:
      const newSamples = [...state.samples];
      for (let sample of action.payload) {
        newSamples.push(sample.id);
      }
      return { ...state, samples: newSamples };
    default:
      return state;
  }
};

export default currentUser;
