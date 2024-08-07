import {useMutation, useQuery} from 'react-query';

import {userService} from '../services/user';
import {User, UserLogin} from '../types/user';

const MutationKeyCreateUser = 'CREATE_USER_KEY';
const MutationKeyGetUser = 'GET_USER_KEY';

export const useUserCreate = () => {
  return useMutation((newUser: User) => userService.CreateUser(newUser), {
    mutationKey: [MutationKeyCreateUser],
    onSuccess: () => {
      console.log('User created successfully');
    },
    onError: error => {
      console.error('Error creating user', error);
    },
  });
};

export const useUserLogin = () => {
  return useMutation((data: UserLogin) => userService.UserLogin(data), {
    mutationKey: [MutationKeyCreateUser],
    onSuccess: () => {
      console.log('User logged successfully');
    },
    onError: error => {
      console.error('Error creating user', error);
    },
  });
};

export const useGetUser = () =>
  useQuery({
    queryKey: [MutationKeyGetUser],
    queryFn: userService.GetUserInfo,
  });
