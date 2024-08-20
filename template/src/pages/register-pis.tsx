import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-root-toast';
import { RouteProp } from '@react-navigation/native';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import {
    VStack,
    H1,
    Text,
    Button,
    Spacer,
    InputWithIcon,
} from '../components/index';
import { RegisterP } from '../types/forms/register';
import { useUserCreate } from '../queries/user';
import { Country } from '../enums/country';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'RegisterPIS'>;
    route: RouteProp<MainRootStackParamList, 'RegisterPIS'>;
};

const RegisterPISS: React.FC<Props> = ({ navigation, route }) => {
    const { t } = useTranslation('register');

    const { firstName, lastName } = route.params;

    const { mutate: createUser, isLoading, isError, isSuccess } = useUserCreate();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegisterP>({
        defaultValues: {
            email: '',
            password: '',
            validatePassword: '',
        },
    });

    const onSubmit = (data: RegisterP) => {
        createUser({
            ...data,
            firstName,
            lastName,
            country: Country.FRANCE,
            phoneNumber: '',
        });
    };

    const password = watch('password');

    useEffect(() => {
        if (isSuccess) {
            navigation.navigate('Home');
        }
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <VStack
                        flex={1}
                        padding={12}
                        gap={12}>
                        <VStack paddingBottom={40}>
                            <H1 color={'#263759'} fontSize={32}>
                                {t('register_pis_h1_information')}
                            </H1>
                            <Text color={'gray'}>{t('register_pis_text_information')}</Text>
                        </VStack>

                        <VStack gap={20}>
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
                                            placeholder: t('register_input_email_placeholder'),
                                            keyboardType: 'email-address',
                                        }}
                                        error={!!errors.email}
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && (
                                <Text
                                    fontSize={13}
                                    fontFamily={'OpenSans-Medium'}
                                    textAlign={'left'}
                                    width={'100%'}
                                    paddingHorizontal={30}>
                                    {errors.email.message}
                                </Text>
                            )}

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
                                        iconName="fingerprint"
                                        onChange={onChange}
                                        textInputProps={{
                                            onBlur: onBlur,
                                            value: value,
                                            placeholder: t('register_input_password_placeholder'),
                                            secureTextEntry: true,
                                        }}
                                        error={!!errors.password}
                                    />
                                )}
                                name="password"
                            />
                            {errors.password && (
                                <Text
                                    fontSize={13}
                                    fontFamily={'OpenSans-Medium'}
                                    textAlign={'left'}
                                    width={'100%'}
                                    paddingHorizontal={30}>
                                    {errors.password.message}
                                </Text>
                            )}

                            <Controller
                                control={control}
                                rules={{
                                    required: 'Please confirm your password',
                                    validate: value =>
                                        value === password || 'Passwords do not match',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputWithIcon
                                        iconName="fingerprint"
                                        onChange={onChange}
                                        textInputProps={{
                                            onBlur: onBlur,
                                            value: value,
                                            placeholder: t(
                                                'register_input_password_again_placeholder',
                                            ),
                                            secureTextEntry: true,
                                        }}
                                        error={!!errors.validatePassword}
                                    />
                                )}
                                name="validatePassword"
                            />
                            {errors.validatePassword && (
                                <Text
                                    fontSize={13}
                                    fontFamily={'OpenSans-Medium'}
                                    textAlign={'left'}
                                    width={'100%'}
                                    paddingHorizontal={30}>
                                    {errors.validatePassword.message}
                                </Text>
                            )}
                        </VStack>

                        <Spacer />

                        <Text
                            color={'#263759'}
                            fontSize={13}
                            fontFamily={'OpenSans-Medium'}>
                            {
                                t('register_text_sign_in_up_information').split(
                                    'Terms & Conditions',
                                )[0]
                            }
                            <Text
                                color={'#0165fe'}
                                fontSize={13}
                                fontFamily={'OpenSans-Bold'}>
                                Terms & Conditions
                            </Text>
                            {
                                t('register_text_sign_in_up_information')
                                    .split('Terms & Conditions')[1]
                                    .split('Privacy Policy')[0]
                            }
                            <Text
                                color={'#0165fe'}
                                fontSize={13}
                                fontFamily={'OpenSans-Bold'}>
                                Privacy Policy
                            </Text>
                            {
                                t('register_text_sign_in_up_information').split(
                                    'Privacy Policy',
                                )[1]
                            }
                        </Text>

                        <Button
                            containerStyle={styles.button}
                            text={t('register_button')}
                            onPress={handleSubmit(onSubmit)}
                            isLoading={isLoading}
                        />
                    </VStack>
                </KeyboardAvoidingView>
            </VStack>
        </SafeAreaView>
    );
};

export const RegisterPISScreen = React.memo(RegisterPISS);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#0165fe',
    },
    contentHidden: {
        opacity: 0.3,
    },
});
