export const API_ROOT = `http://127.0.0.1:3000/api/v1`;
export const API_WS_ROOT = `ws://127.0.0.1:3000/api/v1/cable`;
export const token = localStorage.getItem('token');
export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: token
};
export const form_data_headers = {
  Authorization: token
};
