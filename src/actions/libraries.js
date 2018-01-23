import {
  RECEIVE_ADDED_LIBRARY,
  RECEIVE_EDITED_LIBRARY,
  RECEIVE_DELETED_LIBRARY
} from '../constants/actionTypes';
import { API_ROOT, form_data_headers } from '../constants';

const receiveAddedLibrary = library => {
  return {
    type: RECEIVE_ADDED_LIBRARY,
    payload: {
      library
    }
  };
};

const receiveEditedLibrary = library => {
  return {
    type: RECEIVE_EDITED_LIBRARY,
    payload: {
      library
    }
  };
};

const receiveDeletedLibrary = json => {
  return {
    type: RECEIVE_DELETED_LIBRARY,
    payload: {
      id: json.id
    }
  };
};

// THUNKS

export const addLibrary = formData => {
  return dispatch => {
    return fetch(`${API_ROOT}/libraries`, {
      method: 'POST',
      headers: form_data_headers,
      body: formData
    })
      .then(res => res.json())
      .then(json => dispatch(receiveAddedLibrary(json)));
  };
};

export const editLibrary = (formData, libraryId) => {
  debugger;
  return dispatch => {
    return fetch(`${API_ROOT}/libraries/${libraryId}`, {
      method: 'PATCH',
      headers: form_data_headers,
      body: formData
    })
      .then(res => res.json())
      .then(json => dispatch(receiveEditedLibrary(json)));
  };
};

export const deleteLibrary = libraryId => {
  return dispatch => {
    return fetch(`${API_ROOT}/libraries/${libraryId}`, {
      method: 'DELETE',
      headers: form_data_headers
    })
      .then(res => res.json())
      .then(json => dispatch(receiveDeletedLibrary(json)));
  };
};
