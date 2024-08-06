import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { VStack, H1, H2, Text, Button } from '../components/index';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Register'>;
};

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('register');

    const navigateLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <VStack style={styles.inner}>
                        <H1>{t('register_h1_text')}</H1>
                        <H2>{t('register_h1_text')}</H2>

                        <Text>{t('register_h1_text')}</Text>

                        <VStack>
                            <Button text={t('register_button')} onPress={navigateLogin} />
                        </VStack>
                    </VStack>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
        overflow: 'scroll',
    },
});
