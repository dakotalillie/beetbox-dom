import {
  TOGGLE_SIDEBAR,
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER,
  NO_TOKEN,
  SET_SAMPLE_SEARCH,
  TOGGLE_SAMPLE_SELECT,
  RECEIVE_ADDED_SAMPLES,
  CHANGE_FOCUSED_SAMPLE,
  TOGGLE_ALL_SAMPLES_SELECT,
  TOGGLE_DROPZONE
} from './actionTypes';
import { normalize, schema } from 'normalizr';
import { API_ROOT, headers, file_upload_headers } from '../constants';
import download from 'downloadjs';

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

export const receiveCurrentUser = json => {
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

export const setSampleSearch = value => {
  return {
    type: SET_SAMPLE_SEARCH,
    payload: {
      value
    }
  };
};

export const receiveAddedSamples = json => {
  return {
    type: RECEIVE_ADDED_SAMPLES,
    payload: json
  };
};

export const addSamples = data => {
  return dispatch => {
    return fetch(`${API_ROOT}/samples`, {
      method: 'POST',
      headers: file_upload_headers,
      body: data
    })
      .then(res => res.json())
      .then(json => {
        dispatch(receiveAddedSamples(json));
      });
  };
};

// export const addSamples = data => {
//   return dispatch => {
//     return fetch(`${API_ROOT}/samples`, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(data)
//     })
// .then(res => res.json())
// .then(json => {
//   dispatch(receiveAddedSample(json));
// });
//   };
// };

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

export const toggleSampleSelect = id => {
  return {
    type: TOGGLE_SAMPLE_SELECT,
    payload: {
      id
    }
  };
};

export const changeFocusedSample = id => {
  return {
    type: CHANGE_FOCUSED_SAMPLE,
    payload: {
      id
    }
  };
};

export const toggleAllSamplesSelect = displayedIds => {
  return {
    type: TOGGLE_ALL_SAMPLES_SELECT,
    payload: {
      ids: displayedIds
    }
  };
};

export const toggleDropzone = () => {
  return {
    type: TOGGLE_DROPZONE
  };
};
