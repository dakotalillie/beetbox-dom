import {
  TOGGLE_SIDEBAR,
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  NO_TOKEN
} from './actionTypes';
import { API_ROOT, headers } from '../constants';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  };
};

export const requestCurrentUser = () => {
  return {
    type: REQUEST_CURRENT_USER
  };
};

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: user
  };
};

export const noToken = () => {
  return {
    type: NO_TOKEN
  };
};

export const login = (username, password) => {
  return dispatch => {
    dispatch(requestCurrentUser());
    return fetch(`${API_ROOT}/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(json => dispatch(receiveCurrentUser(json)))
      .then(() => (window.location.href = '/'));
  };
};

export const fetchCurrentUser = () => {
  return dispatch => {
    dispatch(requestCurrentUser());
    return fetch(`${API_ROOT}/current_user`, { headers })
      .then(res => res.json())
      .then(json => dispatch(receiveCurrentUser(json)));
  };
};
