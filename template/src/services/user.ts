import Cookies from '@react-native-cookies/cookies';

import {AuthToken, User, UserLogin} from '../types/user';
import {Fetch} from '../utils/axios';

class UserService {
  async CreateUser(data: User): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/users', data);
      await Cookies.set('https://api.betabridge.store', {
        name: 'quezaco_token',
        value: access_token,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
      await Cookies.set('https://api.betabridge.store', {
        name: 'quezaco_refresh_token',
        value: refresh_token,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
    } catch (err) {
      throw err;
    }
  }

  async UserLogin(data: UserLogin): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/users/login', data);
      await Cookies.set('https://api.betabridge.store', {
        name: 'quezaco_token',
        value: access_token,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
      await Cookies.set('https://api.betabridge.store', {
        name: 'quezaco_refresh_token',
        value: refresh_token,
        path: '/',
        expires: new Date(Date.now() + 86400 * 1000 * 365).toISOString(),
      });
    } catch (err) {
      throw err;
    }
  }

  async GetUserInfo(): Promise<User> {
    const {data: user}: {data: User} = await Fetch.get<User>('/users');

    return user;
  }
}

export const userService: UserService = new UserService();
