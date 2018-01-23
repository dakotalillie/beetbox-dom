import {
  RECEIVE_ADDED_TAG,
  RECEIVE_EDITED_TAG,
  RECEIVE_DELETED_TAG,
  UPDATE_TAG_COUNT
} from '../constants/actionTypes';
import { API_ROOT, form_data_headers } from '../constants';

export const receiveAddedTag = tag => {
  return {
    type: RECEIVE_ADDED_TAG,
    payload: {
      tag
    }
  };
};

export const receiveEditedTag = tag => {
  return {
    type: RECEIVE_EDITED_TAG,
    payload: {
      tag
    }
  };
};

export const receiveDeletedTag = json => {
  return {
    type: RECEIVE_DELETED_TAG,
    payload: {
      id: json.id
    }
  };
};

export const updateTagCount = (tagId, amount) => {
  return {
    type: UPDATE_TAG_COUNT,
    payload: {
      tagId,
      amount
    }
  };
};

// THUNKS

export const addTag = formData => {
  return dispatch => {
    return fetch(`${API_ROOT}/tags`, {
      method: 'POST',
      headers: form_data_headers,
      body: formData
    })
      .then(res => {
        return res.json();
      })
      .then(json => dispatch(receiveAddedTag(json)));
  };
};

export const editTag = (formData, tagId) => {
  return dispatch => {
    return fetch(`${API_ROOT}/tags/${tagId}`, {
      method: 'PATCH',
      headers: form_data_headers,
      body: formData
    })
      .then(res => res.json())
      .then(json => dispatch(receiveEditedTag(json)));
  };
};

export const deleteTag = tagId => {
  return dispatch => {
    return fetch(`${API_ROOT}/tags/${tagId}`, {
      method: 'DELETE',
      headers: form_data_headers
    })
      .then(res => res.json())
      .then(json => dispatch(receiveDeletedTag(json)));
  };
};
