import {
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  LOGIN_ERROR,
  NO_TOKEN,
  RESET_ERROR
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
  if (normalizedData.entities.folders) {
    for (let folderId of Object.keys(normalizedData.entities.folders)) {
      const folder = normalizedData.entities.folders[folderId];
      for (let sampleId of folder.samples) {
        normalizedData.entities.samples[sampleId].folders.push(folder.id);
      }
    }
  }
  if (normalizedData.entities.tags) {
    for (let tagId of Object.keys(normalizedData.entities.tags)) {
      const tag = normalizedData.entities.tags[tagId];
      for (let sampleId of tag.samples) {
        normalizedData.entities.samples[sampleId].tags.push(tag.id);
      }
    }
  }

  delete normalizedData.entities.user.folders;
  delete normalizedData.entities.user.libraries;
  delete normalizedData.entities.user.tags;
  delete normalizedData.entities.user.samples;
  return { type: RECEIVE_CURRENT_USER, payload: normalizedData };
};

export const noToken = () => {
  return {
    type: NO_TOKEN
  };
};

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: {
      error
    }
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR
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
      .then(json => {
        if (!json.error) {
          dispatch(receiveCurrentUser(json));
          window.location.href = '/';
        } else {
          dispatch(loginError(json.error));
        }
      });
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

export const signup = params => {
  return dispatch => {
    dispatch(requestCurrentUser());
    return fetch(`${API_ROOT}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(json => dispatch(receiveCurrentUser(json)))
      .then(() => (window.location.href = '/'));
  };
};
