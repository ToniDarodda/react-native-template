import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Button } from '../components/button';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Register'>;
};

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('register');

    const navigateLogin = () => {
        navigation.navigate('Login');
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
                <Button text={t('register_button')} onPress={navigateLogin} />
            </View>
        </SafeAreaView>
    );
};
