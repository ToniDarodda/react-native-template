import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../pages/login';
import { RegisterScreen } from '../pages/register';
import { HomeScreen } from '../pages/home';

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
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
        animation: 'default'
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
