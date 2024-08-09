import Cookies from '@react-native-cookies/cookies';

import { AuthToken } from '../types/user';
import { BACKEND_URL, TEMPLATE_COOKIE_ACCESS_TOKEN, TEMPLATE_COOKIE_REFRESH_TOKEN } from '../env/env';

export const setCookie = async (value: string, name: string) => {
    await Cookies.set(BACKEND_URL, {
        name,
        value,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
}

export const getCookie = async (): Promise<AuthToken | null> => {
  const cookies = await Cookies.get(BACKEND_URL);
  
  if (cookies[TEMPLATE_COOKIE_ACCESS_TOKEN]?.value === '' ||cookies[TEMPLATE_COOKIE_REFRESH_TOKEN]?.value  === '' ) return null;

  return { access_token : cookies[TEMPLATE_COOKIE_ACCESS_TOKEN]?.value, refresh_token: cookies[TEMPLATE_COOKIE_REFRESH_TOKEN]?.value };
};

export const removeCookie = async () => {
  await Cookies.clearAll();
};