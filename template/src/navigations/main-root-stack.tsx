import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { LoginScreen } from '../pages/login';
import { RegisterScreen } from '../pages/register';
import { HomeScreen } from '../pages/home';
import { ProfileScreen } from '../pages/profile';
import { isAuthenticated } from '../stores/selectors/user';
import { registerPIS } from '../types/navigations/register';
import { RegisterPISScreen } from '../pages/register-pis';
import { WelcomeScreen } from '../pages/welcome';
import { UpdateProfileScreen } from '../pages/update-profile';

export type MainRootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  RegisterPIS: registerPIS;

  Login: undefined;

  LostCredentials: undefined;
  Congratulations: undefined;

  Home: undefined;
  Profile: undefined;
  UpdateProfile: undefined;
};

const Stack = createNativeStackNavigator<MainRootStackParamList>();

export const MainRootStack = () => {
  const isAuth = useSelector(isAuthenticated);

  return (
    <Stack.Navigator
      initialRouteName={isAuth ? 'Home' : 'Welcome'}
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="RegisterPIS" component={RegisterPISScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfileScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
          contentStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};
