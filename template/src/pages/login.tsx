import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button } from '../components/button';
import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Input } from '../components/input';
import { VStack } from '../components/vstack';
import { HStack } from '../components/hstack';
import { Switch } from '../components/switch';
import { Image } from '../components/image';
import { H1 } from '../components/h1';
import { H2 } from '../components/h2';
import { Text } from '../components/text';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

const { height } = Dimensions.get('window');


export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const navigateRegister = () => {
        navigation.navigate('Register');
    };


    return (
        <SafeAreaView
            style={{ height: height, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <Image source={require('../assets/bg-2.jpg')} style={{ width: 400, height: 450, marginTop: 24 }} />

            <H1>{t('login_h1_text')}</H1>
            <H2>{t('login_h1_text')}</H2>
            <Text>{t('login_h1_text')}</Text>


            <VStack style={{ width: 350, gap: 12 }}>

                <VStack style={{ width: '100%', gap: 12, }}>
                    <Input />
                    <Button text={t('login_button')} onPress={navigateRegister} />
                </VStack>
                <Icon name="home" light={true} size={24} color="white" />

                <Switch />

                <HStack style={{ width: '100%' }}>
                    <Input />
                    <Button text={t('login_button')} onPress={navigateRegister} />
                </HStack>
            </VStack>


        </SafeAreaView>
    );
};
