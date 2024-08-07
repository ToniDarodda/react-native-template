import Cookies from '@react-native-cookies/cookies';
import { AuthToken } from '../types/user';

export const setCookie = async (value: string, name: string) => {
    await Cookies.set('http://192.168.1.25:3000', {
        name,
        value,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
}

export const getCookie = async (): Promise<AuthToken> => {
  const cookies = await Cookies.get('http://192.168.1.25');
  return { access_token : cookies['template_access_token']?.value || '', refresh_token: cookies['template_refresh_token']?.value || '' };
};

export const removeCookie = async (name: string) => {
  await Cookies.clearByName('http://192.168.1.25', name);
};