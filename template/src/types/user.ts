import { Role } from "react-native";
import { Country } from "../enums/country";

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

export type AuthToken =  {
  access_token: string;
  refresh_token: string;
}
