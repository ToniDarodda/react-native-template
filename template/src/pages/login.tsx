import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '../components/button';
import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Input } from '../components/input';
import { VStack } from '../components/vstack';
import { HStack } from '../components/hstack';
import { Switch } from '../components/switch';

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
            style={{ height: 600, justifyContent: 'center', alignItems: 'center', marginTop: 100, gap: 12 }}>
            <VStack style={{ width: 300, gap: 12 }}>


                <VStack style={{ width: '100%', gap: 12, backgroundColor: 'red' }}>
                    <Input />
                    <Button text={t('login_button')} onPress={navigateRegister} />
                </VStack>

                <Switch />


                <HStack style={{ width: '100%', backgroundColor: 'blue' }}>
                    <Input />
                    <Button text={t('login_button')} onPress={navigateRegister} />
                </HStack>
            </VStack>


        </SafeAreaView>
    );
};
