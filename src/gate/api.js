import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import store from 'store';
import tokenHelper from 'helpers/token';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
  json: true,
});

client.interceptors.response.use(null, function (error) {
  console.log(error.response);
  const responseStatus = error?.response?.status + '';

  if (responseStatus.match(/^5\d{2}$/)) {
    //showMessage('Internal Server Error');
  } else if (responseStatus === 401 || responseStatus === 403) {
    if (
      error.config.url !== 'Auth/login' ||
      (responseStatus === 404 && error.config.url.includes('GetUser'))
    ) {
      // history.push('/auth');
      // window.location.href = '/auth';
      tokenHelper.clear();
      // store.dispatch(logout);
    }
  }

  return Promise.reject(error);
});

const call = async (method, url, data = {}, userID, params) => {
  let userId;
  let URL = url;
  const token = await tokenHelper.get();
  userID === undefined
    ? (userId =
        (await store.getState()?.user?.userId) || tokenHelper.get_userId())
    : (userId = userID);
  const language = store.getState()?.app?.language?.name || 'fa';

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    language,
  };

  if (token !== '') {
    headers.Authorization = `Bearer ${token}`;
  }

  if (userId) {
    URL = url + `?userId=${userId}`;

    if (!isEmpty(params)) {
      Object.keys(params).forEach((key) => {
        URL = URL + `&${key}=${params[key]}`;
      });
    }
  }

  const request = {headers, method, url: URL};

  if (!isEmpty(data)) {
    request.data = data;
  }
  const isInternetReachable = await store.getState()?.app?.isInternetReachable;
  try {
    if (!isInternetReachable) {
      throw new Error('OFFLINE');
    }
    console.group('Call Request');
    console.info('Request ', request);

    const response = await client(request);

    console.info('Response ', response);
    console.groupEnd();

    const {data} = response;
    if (data?.textMessage || data?.message) {
      // showMessage(data?.textMessage || data?.message);
    }

    return Promise.resolve(response.data);
  } catch (error) {
    console.log(error);

    // !isInternetReachable && ShowAppropriateErrorMessage
    return Promise.reject(error.response);
  }
};

const auth = {
  async signOut(url) {
    const token = tokenHelper.get();

    token.clear();
    call('post', url);
  },
};

export default {
  ...auth,
  BASE_URL,
  delete: (url, data = {}, userID, params) =>
    call('delete', url, data, userID, params),
  get: (url, data = {}, userID, params) =>
    call('get', url, data, userID, params),
  patch: (url, data = {}, userID, params) =>
    call('patch', url, data, userID, params),
  post: (url, data = {}, userID, params) =>
    call('post', url, data, userID, params),
  put: (url, data = {}, userID, params) =>
    call('put', url, data, userID, params),
};
