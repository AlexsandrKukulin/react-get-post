import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://193.19.100.32:7000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRoles = async () => {
  const response = await apiClient.get('/api/get-roles');
  return response.data;
};

export const signUp = async (candidate) => {
  const response = await apiClient.post('/api/sign-up', candidate);
  return response.data;
};

export const getCode = async (email) => {
  const response = await apiClient.get('/api/get-code', { params: { email } });
  return response.data;
};

export const setStatus = async (status) => {
  const response = await apiClient.post('/api/set-status', status);
  return response.data;
};

