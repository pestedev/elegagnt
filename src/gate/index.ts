import api from './api';

const methods = {
  delete: (url, data = {}) => api.delete(url, data),
  get: (url, data = {}) => api.get(url, data),
  patch: (url, data = {}) => api.patch(url, data),
  post: (url, data = {}) => api.post(url, data),
  put: (url, data = {}) => api.put(url, data),
};

const auth = {
  login: (data) => api.post('Auth/login', data),
  register: (data) => api.post('Auth/register', data),
};

export default {
  // getRepositories: query =>
  // api.get(`/search/repositories?q=${query}&sort=stars`, {}),
  // any: someId => api.get(`/any/${someId}`),
  // any: data => api.post('/any', data),
  ...methods,
  ...auth,
};
