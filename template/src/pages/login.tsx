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
import { useUserLogin } from '../queries/user';
import { FormLogin } from '../types/forms/login';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Login'>;
};

export const Login: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('login');

    const { mutate: userLogin, isLoading, isSuccess, isError } = useUserLogin();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLogin>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: FormLogin) => {
        userLogin(data);
    };

    const navigateRegister = () => {
        navigation.navigate('Register');
    };

    useEffect(() => {
        if (isSuccess) navigation.navigate('Home');
    }, [isSuccess]);

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
                    height: 40,
                },
            });
        }
    }, [isError]);

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack
                flex={1}
                padding={12}
                gap={12}>
                <VStack
                    flex={1}
                    padding={12}
                    gap={12}>
                    <H1 color={'#263759'}>{t('login_h1_text')}</H1>
                    <Text color={'#263759'} paddingBottom={40}>
                        {t('login_text_information')}
                    </Text>

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
                                iconName="email"
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
                                iconName="lock"
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

                    <VStack alignItems={'flex-end'}>
                        <Text color={'#0165fe'} fontFamily={'OpenSans-Bold'} fontSize={13}>
                            {t('login_forgot_password')}
                        </Text>
                    </VStack>

                    <Spacer />

                    <Button
                        containerStyle={styles.button}
                        text={t('login_button')}
                        onPress={handleSubmit(onSubmit)}
                        isLoading={isLoading}
                    />

                    <HStack>
                        <Text
                            color={'#263759'}
                            fontSize={13}
                            fontFamily={'OpenSans-Medium'}>
                            {t('login_new_to_app')}
                        </Text>

                        <Pressable onPress={navigateRegister}>
                            <Text
                                color={'#0165fe'}
                                fontFamily={'OpenSans-Bold'}
                                fontSize={13}>
                                {t('login_navigate_to_register')}
                            </Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </VStack>
        </SafeAreaView>
    );
};

export const LoginScreen = React.memo(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#0165fe',
    },
});
