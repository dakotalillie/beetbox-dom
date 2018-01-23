import {
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  NO_TOKEN
} from '../constants/actionTypes';
import { normalize, schema } from 'normalizr';
import { API_ROOT, headers } from '../constants';

const requestCurrentUser = () => {
  return {
    type: REQUEST_CURRENT_USER
  };
};

const receiveCurrentUser = json => {
  const folder = new schema.Entity('folders');
  const library = new schema.Entity('libraries');
  const sample = new schema.Entity('samples');
  const tag = new schema.Entity('tags');
  const user = new schema.Entity('user', {
    folders: [folder],
    libraries: [library],
    samples: [sample],
    tags: [tag]
  });
  const normalizedData = normalize(json, user);
  const id = Object.keys(normalizedData.entities.user)[0];
  normalizedData.entities.user = normalizedData.entities.user[id];
  delete normalizedData.entities.user.folders;
  delete normalizedData.entities.user.libraries;
  delete normalizedData.entities.user.tags;
  delete normalizedData.entities.user.samples;
  return {
    type: RECEIVE_CURRENT_USER,
    payload: normalizedData
  };
};

export const noToken = () => {
  return {
    type: NO_TOKEN
  };
};

// THUNKS

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
