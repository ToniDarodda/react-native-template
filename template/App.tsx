import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import Cookies from '@react-native-cookies/cookies';
import './src/utils/i18n';

import { MainRootStack } from './src/navigations/main-root-stack';
import { AuthToken } from './src/types/user';
import { setUser } from './src/stores/user-slice';
import { AppDispatch, store } from './src/stores/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { getCookie } from './src/utils/cookie-manager';


const queryClient = new QueryClient();

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getCookie().then((cookie) => {
      if (cookie) {
        dispatch(setUser(cookie));
      }
    });
  }, [dispatch]);

  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <MainRootStack />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </RootSiblingParent>
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
