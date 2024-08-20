import {useMutation, useQuery, useQueryClient} from 'react-query';

import {userService} from '../services/user';
import {UserLogin, userPatch, UserRegister} from '../types/user';

const MutationKeyCreateUser = 'CREATE_USER_KEY';
const MutationKeyGetUser = 'GET_USER_KEY';
const MutationKeyPatchUser = 'PATCH_USER_KEY';
const MutationKeyDeleteUser = 'DELETE_USER_KEY';

export const useUserCreate = () => {
  return useMutation(
    (newUser: UserRegister) => userService.CreateUser(newUser),
    {
      mutationKey: [MutationKeyCreateUser],
      onSuccess: () => {
        console.log('User created successfully');
      },
      onError: error => {
        console.error('Error creating user', error);
      },
    },
  );
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

export const useUserPatch = () => {
  const queryClient = useQueryClient();

  return useMutation((data: userPatch) => userService.patchUser(data), {
    mutationKey: [MutationKeyPatchUser],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [MutationKeyGetUser]});
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

export const useUserDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(() => userService.deleteUser(), {
    mutationKey: [MutationKeyDeleteUser],
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [/* Invalid queries*/]});
    },
    onError: error => {
      console.error('Error creating user', error);
    },
  });
};
