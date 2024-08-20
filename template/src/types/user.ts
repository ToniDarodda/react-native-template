import { Country } from "../enums/country";
import { Role } from '../enums/role';

export type User = {
    firstName: string;

    lastName: string;

    email: string;
  
    phoneNumber: string;
  
    password: string;
  
    country: Country;
  
    roles: Role[];
};

export type UserLogin = Pick<User, 'email' | 'password'>;
export type UserRegister = Omit<User, 'roles'>;
export type userPatch = Pick<User, 'email'>;

export type AuthToken =  {
  access_token: string;
  refresh_token: string;
}
