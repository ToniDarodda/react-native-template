import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useForm, Controller } from "react-hook-form"

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
import globalStyles from '../styles/global';
import { RegisterP } from '../types/forms/register';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'RegisterPIS'>;
};

export const RegisterPISScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('register');

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

    const onSubmit = (data: RegisterP) => console.log(data);

    const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true),
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false),
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    // Watch password to use in validation
    const password = watch('password');

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack style={styles.inner}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>

                    <VStack style={[styles.inner, globalStyles.alignItemsStart]}>

                        <VStack style={globalStyles.alignItemsStart}>
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
                            {errors.email && <Text>{errors.email.message}</Text>}

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
                            {errors.password && <Text>{errors.password.message}</Text>}

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
                            {errors.validatePassword && <Text>{errors.validatePassword.message}</Text>}
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
    }
});
