import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import './src/utils/i18n';

import { MainRootStack } from './src/navigations/main-root-stack';
import { setTokens, setUser } from './src/stores/slices/user-slice';
import { AppDispatch, store } from './src/stores/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { getCookie } from './src/utils/cookie-manager';
import { useGetUser } from './src/queries/user';


const queryClient = new QueryClient();

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  const { data: account, isLoading: userLoading } = useGetUser();



  useEffect(() => {
    const checkAuthentication = async () => {
      const cookie = await getCookie();
      if (cookie) {
        dispatch(setTokens(cookie));
      }

      if (!userLoading && account) {
        dispatch(setUser(account));
        setLoading(false);
      } else if (!userLoading && !account) {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [account, userLoading]);

  if (loading) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <MainRootStack />
      </SafeAreaProvider>
    </RootSiblingParent >
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default AppWrapper;
