import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Input } from '../components/input';
import { VStack } from '../components/vstack';
import { Switch } from '../components/switch';
import { H1 } from '../components/h1';
import { H2 } from '../components/h2';
import { Text } from '../components/text';
import { Button } from '../components/button';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <VStack style={styles.inner}>

                        <H1>{t('login_h1_text')}</H1>
                        <H2>{t('login_h1_text')}</H2>

                        {/* <Image source={require('../assets/bg-2.jpg')} style={{ width: 400, height: 450, marginTop: 24 }} /> */}

                        <Text>{t('login_h1_text')}</Text>

                        <Input />

                        <Switch />

                        <VStack>
                            <Button text={t('login_button')} onPress={navigateRegister} />
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
        overflow: 'scroll'
    },

});
