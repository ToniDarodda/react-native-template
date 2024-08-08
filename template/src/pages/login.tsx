import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-root-toast';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import {
    VStack,
    H1,
    Text,
    Button,
    Spacer,
    HStack,
    InputWithIcon,
} from '../components/index';
import globalStyles from '../styles/global';
import { Text as TextStyle } from '../styles/text';
import { useUserLogin } from '../queries/user';
import { FormLogin } from '../types/forms/login';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const { mutate: userLogin, isLoading, isSuccess, isError } = useUserLogin();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLogin>({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: FormLogin) => {
        console.log('oui')
        userLogin(data);
    }


    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    useEffect(() => {
        if (isSuccess) navigation.navigate('Home');
    }, [isSuccess])

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


                <VStack style={[styles.inner]}>

                    <H1 style={TextStyle.blue}>{t('login_h1_text')}</H1>
                    <Text style={[TextStyle.blue, { paddingBottom: 40 }]}>{t('login_text_information')}</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputWithIcon
                                iconName='email'
                                onChange={onChange}
                                textInputProps={{
                                    onBlur: onBlur,
                                    value: value,
                                    placeholder: t('login_input_email_placeholder'),
                                    keyboardType: 'email-address',
                                }}
                                error={!!errors.email}
                            />
                        )}
                        name="email"
                    />


                    <Controller
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputWithIcon
                                iconName='lock'
                                onChange={onChange}
                                textInputProps={{
                                    onBlur: onBlur,
                                    value: value,
                                    placeholder: t('login_input_password_placeholder'),
                                    secureTextEntry: true,
                                }}
                                error={!!errors.password}
                            />
                        )}
                        name="password"
                    />


                    <VStack style={globalStyles.alignItemsEnd}>
                        <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                            {t('login_forgot_password')}
                        </Text>
                    </VStack>

                    <Spacer />

                    <Button containerStyle={styles.button} text={t('login_button')} onPress={handleSubmit(onSubmit)} isLoading={isLoading} />

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
    textError: {
        textAlign: 'left',
        width: '100%',
        paddingHorizontal: 30
    },
});
