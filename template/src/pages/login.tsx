import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-root-toast';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import {
    VStack,
    H1,
    Text,
    Button,
    Image,
    Spacer,
    HStack,
    InputWithIcon,
} from '../components/index';
import globalStyles from '../styles/global';
import { Text as TextStyle } from '../styles/text';
import { useUserLogin } from '../queries/user';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

type Form = {
    email: string,
    password: string;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const { mutate: userLogin, isLoading, isSuccess, isError } = useUserLogin();

    const [form, setForm] = useState<Form>({
        email: '',
        password: '',
    })

    const handleMailChange = (value: string) => {
        setForm({
            ...form,
            email: value,
        });
    };

    const handlePasswordChange = (value: string) => {
        setForm({
            ...form,
            password: value,
        });
    };

    const handleSubmit = () => {
        console.log('pressed');
        userLogin(form)
        console.log(form);
    }

    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    useEffect(() => {
        if (isError) {
            Toast.show(`Your request failed, credentials don't match.`, {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                animation: true,
                hideOnPress: true,
                opacity: 1,
                delay: 0,
                backgroundColor: '#FF9494',
                textColor: 'white',
                containerStyle: {
                    width: '100%',
                    height: 40
                }
            });
        }
    }, [isError])

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

                    <InputWithIcon placeHolder={t('login_input_email_placeholder')} iconName='email' onChange={handleMailChange} keyboardType='email-address' />
                    <InputWithIcon placeHolder={t('login_input_password_placeholder')} iconName='lock' onChange={handlePasswordChange} secureTextEntry />

                    <VStack style={globalStyles.alignItemsEnd}>
                        <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                            {t('login_forgot_password')}
                        </Text>
                    </VStack>

                    <Spacer />

                    <Button containerStyle={styles.button} text={t('login_button')} onPress={handleSubmit} />

                    <HStack>

                        <Text style={[TextStyle.blue, TextStyle.small]}>
                            {t('login_new_to_app')}
                        </Text>

                        <Pressable onPress={navigateRegister}>
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                                {t('login_navigate_to_register')}
                            </Text>
                        </Pressable>
                    </HStack>

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
    },
});
