import axios, {AxiosInstance} from 'axios';
import Cookies from '@react-native-cookies/cookies';

import { BACKEND_URL } from '../env/env';

export const Fetch: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  timeoutErrorMessage:
    'Request timeout there is maybe a problem with the server!',
  withCredentials: true,
});

Fetch.interceptors.request.use(
  async config => {
    const cookie = await Cookies.get(BACKEND_URL);

    if (cookie && cookie.value) {
      config.headers.Authorization = `Bearer ${cookie.value}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
