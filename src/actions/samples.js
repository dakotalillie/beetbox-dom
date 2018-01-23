import download from 'downloadjs';
import {
  RECEIVE_ADDED_SAMPLE,
  RECEIVE_EDITED_SAMPLES,
  RECEIVE_DELETED_SAMPLES
} from '../constants/actionTypes';
import { API_ROOT, headers, form_data_headers } from '../constants';

export const receiveAddedSample = json => {
  return {
    type: RECEIVE_ADDED_SAMPLE,
    payload: {
      sample: json.sample
    }
  };
};

const receiveEditedSamples = samples => {
  return {
    type: RECEIVE_EDITED_SAMPLES,
    payload: {
      samples
    }
  };
};

const receiveDeletedSamples = sampleIds => {
  return {
    type: RECEIVE_DELETED_SAMPLES,
    payload: {
      sampleIds
    }
  };
};

// THUNKS

export const addSamples = data => {
  return dispatch => {
    return fetch(`${API_ROOT}/samples`, {
      method: 'POST',
      headers: form_data_headers,
      body: data
    });
  };
};

export const editSamples = (sampleIds, data) => {
  return dispatch => {
    return fetch(`${API_ROOT}/samples`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        samples: sampleIds,
        data
      })
    })
      .then(res => res.json())
      .then(json => dispatch(receiveEditedSamples(json)));
  };
};

export const deleteSamples = sampleIds => {
  return dispatch => {
    return fetch(`${API_ROOT}/samples`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({
        sampleIds
      })
    })
      .then(res => res.json())
      .then(json => dispatch(receiveDeletedSamples(json)));
  };
};

export const downloadSamples = samples => {
  return dispatch => {
    return fetch(`${API_ROOT}/samples/download`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        samples
      })
    })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        if (samples.length === 1) {
          download(blob, samples[0].name);
        } else {
          download(blob, 'beetbox.zip');
        }
      });
  };
};
