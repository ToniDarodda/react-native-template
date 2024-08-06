import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '../components/button';
import { MainRootStackParamList } from '../navigations/main-root-stack';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView
            style={{ height: 600, justifyContent: 'center', marginTop: 100 }}>
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Button text={t('login_button')} onPress={navigateRegister} />
            </View>
        </SafeAreaView>
    );
};
