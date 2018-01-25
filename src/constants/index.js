export const API_ROOT = `https://beetbox-api.herokuapp.com/api/v1`;
export const API_WS_ROOT = `ws://beetbox-api.herokuapp.com/api/v1/cable`;
export const token = localStorage.getItem('token');
export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: token
};
export const form_data_headers = {
  Authorization: token
};
