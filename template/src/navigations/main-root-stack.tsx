import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { LoginScreen } from '../pages/login';
import { RegisterScreen } from '../pages/register';
import { HomeScreen } from '../pages/home';
import { ProfileScreen } from '../pages/profile';
import { isAuthenticated } from '../stores/selectors/user';

export type MainRootStackParamList = {
  Register: undefined;
  Login: undefined;
  LostCredentials: undefined;
  Congratulations: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<MainRootStackParamList>();

export const MainRootStack = () => {
  const isAuth = useSelector(isAuthenticated);

  return (
    <Stack.Navigator
      initialRouteName={isAuth ? 'Home' : 'Login'}
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
