import {
  RECEIVE_ADDED_FOLDER,
  RECEIVE_EDITED_FOLDER,
  RECEIVE_DELETED_FOLDER
} from '../constants/actionTypes';
import { API_ROOT, form_data_headers } from '../constants';

const receiveAddedFolder = folder => {
  return {
    type: RECEIVE_ADDED_FOLDER,
    payload: {
      folder
    }
  };
};

const receiveEditedFolder = folder => {
  return {
    type: RECEIVE_EDITED_FOLDER,
    payload: {
      folder
    }
  };
};

const receiveDeletedFolder = json => {
  return {
    type: RECEIVE_DELETED_FOLDER,
    payload: {
      id: json.id
    }
  };
};

// THUNKS

export const addFolder = formData => {
  return dispatch => {
    return fetch(`${API_ROOT}/folders`, {
      method: 'POST',
      headers: form_data_headers,
      body: formData
    })
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(receiveAddedFolder(json)));
  };
};

export const editFolder = (formData, folderId) => {
  return dispatch => {
    return fetch(`${API_ROOT}/folders/${folderId}`, {
      method: 'PATCH',
      headers: form_data_headers,
      body: formData
    })
      .then(res => res.json())
      .then(json => dispatch(receiveEditedFolder(json)));
  };
};

export const deleteFolder = folderId => {
  return dispatch => {
    return fetch(`${API_ROOT}/folders/${folderId}`, {
      method: 'DELETE',
      headers: form_data_headers
    })
      .then(res => res.json())
      .then(json => dispatch(receiveDeletedFolder(json)));
  };
};
