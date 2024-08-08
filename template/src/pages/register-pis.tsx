import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useForm, Controller } from "react-hook-form"
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
import { Text as TextStyle } from '../styles/text';
import { RegisterP } from '../types/forms/register';
import { useUserCreate } from '../queries/user';
import { Country } from '../enums/country';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'RegisterPIS'>;
    route: RouteProp<MainRootStackParamList, 'RegisterPIS'>;

};

export const RegisterPISScreen: React.FC<Props> = ({ navigation, route }) => {
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
            email: "",
            password: "",
            validatePassword: "",
        },
    });

    const onSubmit = (data: RegisterP) => {
        createUser({
            ...data, firstName, lastName, country: Country.FRANCE, phoneNumber: '',
        });
    }


    const password = watch('password');

    useEffect(() => {
        if (isSuccess) {
            navigation.navigate('Home');
        }
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >

                    <VStack style={[styles.inner]}>

                        <VStack style={{ paddingBottom: 40 }}>
                            <H1 style={[TextStyle.blue, { fontSize: 28 }]}>{t('register_pis_h1_information')}</H1>
                            <Text style={TextStyle.darkGray}>{t('register_pis_text_information')}</Text>
                        </VStack>

                        <VStack style={styles.gaper}>
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
                                            placeholder: t('register_input_email_placeholder'),
                                            keyboardType: 'email-address',
                                        }}
                                        error={!!errors.email}
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && <Text style={[TextStyle.small, styles.textError]}>{errors.email.message}</Text>}

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
                                        iconName='fingerprint'
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
                            {errors.password && <Text style={[TextStyle.small, styles.textError]}>{errors.password.message}</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    required: 'Please confirm your password',
                                    validate: value =>
                                        value === password || 'Passwords do not match',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputWithIcon
                                        iconName='fingerprint'
                                        onChange={onChange}
                                        textInputProps={{
                                            onBlur: onBlur,
                                            value: value,
                                            placeholder: t('register_input_password_again_placeholder'),
                                            secureTextEntry: true,
                                        }}
                                        error={!!errors.validatePassword}
                                    />
                                )}
                                name="validatePassword"
                            />
                            {errors.validatePassword && <Text style={[TextStyle.small, styles.textError]}>{errors.validatePassword.message}</Text>}
                        </VStack>

                        <Spacer />

                        <Text style={[TextStyle.blue, TextStyle.small]}>
                            {
                                t('register_text_sign_in_up_information').split(
                                    'Terms & Conditions',
                                )[0]
                            }
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>Terms & Conditions</Text>
                            {
                                t('register_text_sign_in_up_information')
                                    .split('Terms & Conditions')[1]
                                    .split('Privacy Policy')[0]
                            }
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>Privacy Policy</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
    contentHidden: {
        opacity: 0.3,
    },
    gaper: {
        gap: 20,
    },
    textError: {
        textAlign: 'left',
        width: '100%',
        paddingHorizontal: 30
    }
});
