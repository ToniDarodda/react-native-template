import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
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
} from '../components/index';
import globalStyles from '../styles/global';
import { text } from '../styles/text';

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
            <View style={styles.inner}>
                <Image
                    source={require('../assets/bg-5.jpg')}
                    style={styles.backgroundImage}
                />
                <VStack style={[styles.inner, globalStyles.alignItemsStart]}>
                    <H1 style={text.blue}>{t('login_h1_text')}</H1>
                    <Text style={text.blue}>{t('login_text_information')}</Text>

                    <Input placeHolder={t('login_input_email_placeholder')} />
                    <Input placeHolder={t('login_input_password_placeholder')} />

                    <Switch />

                    <Spacer />
                    <Button text={t('login_button')} onPress={navigateRegister} />
                </VStack>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: 300,
        height: 300,
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
});
