import './src/utils/i18n';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import Cookies from '@react-native-cookies/cookies';

import { MainRootStack } from './src/navigations/main-root-stack';
import { AuthToken, User } from './src/types/user';
import { setUser } from './src/stores/user-slice';
import { AppDispatch, store } from './src/stores/store';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    Cookies.get('user-cookie').then((cookie) => {
      console.log({ cookie })
      if (cookie && cookie.value) {
        dispatch(setUser(cookie as unknown as AuthToken));
      }
    });
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainRootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
