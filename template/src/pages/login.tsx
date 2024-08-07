import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import {
    Input,
    VStack,
    Switch,
    H1,
    Text,
    Button,
    Image,
    Spacer,
    SeparatorWithText,
} from '../components/index';
import globalStyles from '../styles/global';
import { Text as TextStyle } from '../styles/text';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack style={styles.inner}>
                <Image
                    source={require('../assets/bg-6.jpg')}
                    style={styles.backgroundImage}
                />
                <VStack style={[styles.inner, globalStyles.alignItemsStart]}>
                    <H1 style={TextStyle.blue}>{t('login_h1_text')}</H1>
                    <Text style={TextStyle.blue}>{t('login_text_information')}</Text>

                    <Input placeHolder={t('login_input_email_placeholder')} />
                    <Input placeHolder={t('login_input_password_placeholder')} />

                    <Switch />

                    <Spacer />
                    <Button containerStyle={styles.button} text={t('login_button')} onPress={navigateRegister} />
                    <SeparatorWithText />
                    <Button containerStyle={styles.button} text={t('login_button')} onPress={navigateRegister} />
                </VStack>
            </VStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: 300,
        height: 250,
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    inner: {
        flex: 1,
        padding: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    button: {
        backgroundColor: '#0165fe',
    }
});
