export const API_ROOT = `http://localhost:3000/api/v1`;
export const token = localStorage.getItem('token');
export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: token
};
export const file_upload_headers = {
  // 'Content-Type': 'multipart/form-data',
  // 'Accept-Encoding': 'binary',
  // Accept: 'multipart/form-data',
  Authorization: token
};
