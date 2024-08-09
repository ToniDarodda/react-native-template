import {AuthToken, User, UserLogin, UserRegister} from '../types/user';
import {Fetch} from '../utils/axios';
import {setCookie} from '../utils/cookie-manager';
import {TEMPLATE_COOKIE_ACCESS_TOKEN, TEMPLATE_COOKIE_REFRESH_TOKEN} from '../env/env'

class UserService {
  async CreateUser(data: UserRegister): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-up', data);

      await setCookie(access_token, TEMPLATE_COOKIE_ACCESS_TOKEN);
      await setCookie(refresh_token, TEMPLATE_COOKIE_REFRESH_TOKEN);
    } catch (err) {
      throw err.message;
    }
  }

  async UserLogin(data: UserLogin): Promise<void> {
    try {
      const {
        data: {access_token, refresh_token},
      } = await Fetch.post<AuthToken>('/account/sign-in', data);

      await setCookie(access_token, TEMPLATE_COOKIE_ACCESS_TOKEN);
      await setCookie(refresh_token, TEMPLATE_COOKIE_REFRESH_TOKEN);
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
