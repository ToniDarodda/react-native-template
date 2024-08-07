import Cookies from '@react-native-cookies/cookies';

import {AuthToken, User, UserLogin} from '../types/user';
import {Fetch} from '../utils/axios';
import { getCookie, setCookie } from '../utils/cookie-manager';

class UserService {
  async CreateUser(data: User): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-up', data);
      
      await setCookie(access_token, 'template_access_token');
      await setCookie(refresh_token, 'template_refresh_token');

    } catch (err) {
      throw err.message;
    }
  }

  async UserLogin(data: UserLogin): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-in', data);
     
      await setCookie(access_token, 'template_access_token');
      await setCookie(refresh_token, 'template_refresh_token');
    } catch (err) {
      throw err.message;
    }
  }

  async GetUserInfo(): Promise<User> {
    const {data: user}: {data: User} = await Fetch.get<User>('/account');

    return user;
  }
}

export const userService: UserService = new UserService();
