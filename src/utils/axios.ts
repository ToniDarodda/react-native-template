import axios, {AxiosInstance} from 'axios';
import Cookies from '@react-native-cookies/cookies';

export const Fetch: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1',
  timeout: 5000,
  timeoutErrorMessage:
    'Request timeout there is maybe a problem with the server!',
  withCredentials: true,
});

Fetch.interceptors.request.use(
  async config => {
    const cookie = await Cookies.get('template_cookie');
    if (cookie && cookie.value) {
      config.headers.Authorization = `Bearer ${cookie.value}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
