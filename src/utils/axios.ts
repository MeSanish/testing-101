import axios, { AxiosRequestConfig } from 'axios';
import Config from 'src/config';
import storage from 'src/utils/storage';
import parseErrorMessage from './error';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: Config.ApiEnv.baseURL,
  timeout: Config.ApiEnv.timeout,
  paramsSerializer: function(params) {
    return qs.stringify(params, { encode: false });
  }
});

axiosInstance.interceptors.request.use(function(config) {
  let storageItem = storage.getItem('test-101');
  if (storageItem) {
    let session = JSON.parse(storageItem);
    config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    return config;
  } else {
    return config;
  }
});

interface IClientError {
  config: AxiosRequestConfig;
  request: XMLHttpRequest;
  response: undefined;
  message: string;
  stack: string;
}

function parseClientError(error: IClientError) {
  let parsedError = {
    message: 'Something went wrong',
    status: 'CLIENT_ERROR'
  };
  if (error.message === 'Network Error') {
    parsedError = {
      message: 'There seems to be no internet connection',
      status: 'CLIENT_ERROR'
    };
  }
  return parsedError;
}

axiosInstance.interceptors.response.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error.response ? parseErrorMessage(error.response) : parseClientError(error));
  }
);

export default axiosInstance;
