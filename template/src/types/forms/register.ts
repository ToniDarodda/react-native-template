import { Country } from "../../enums/country";

export type Register = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    validatePassword: string;
    phoneNumber: string;
    country: Country;
};

export type RegisterFL = Pick<Register, 'firstName' | 'lastName'>;

export type RegisterP = Pick<Register, 'email' | 'password' | 'validatePassword'>