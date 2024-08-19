import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

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
import { Text as TextStyle } from '../styles/text';
import { RegisterFL } from '../types/forms/register';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Register'>;
};

const Register: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('register');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFL>({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });

    const onSubmit = (data: RegisterFL) => {
        navigation.navigate('RegisterPIS', { ...data });
    };

    const navigateLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack style={styles.inner}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <VStack style={[styles.inner]}>
                        <VStack style={styles.textSpace}>
                            <H1 style={TextStyle.blue}>{t('register_h1_text')}</H1>
                            <Text style={TextStyle.blue}>
                                {t('register_text_information')}
                            </Text>
                        </VStack>

                        <VStack style={styles.gaper}>
                            <Controller
                                control={control}
                                rules={{
                                    required: 'First name is required',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputWithIcon
                                        iconName="slideshare"
                                        onChange={onChange}
                                        textInputProps={{
                                            onBlur: onBlur,
                                            defaultValue: value,
                                            placeholder: t('register_input_first_name_placeholder'),
                                        }}
                                        error={!!errors.firstName}
                                    />
                                )}
                                name="firstName"
                            />
                            {errors.firstName && (
                                <Text style={[TextStyle.small, styles.textError]}>
                                    {errors.firstName.message}
                                </Text>
                            )}

                            <Controller
                                control={control}
                                rules={{
                                    required: 'Last name is required',
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputWithIcon
                                        iconName="palette"
                                        onChange={onChange}
                                        textInputProps={{
                                            onBlur: onBlur,
                                            defaultValue: value,
                                            placeholder: t('register_input_last_name_placeholder'),
                                        }}
                                        error={!!errors.lastName}
                                    />
                                )}
                                name="lastName"
                            />
                            {errors.lastName && (
                                <Text style={[TextStyle.small, styles.textError]}>
                                    {errors.lastName.message}
                                </Text>
                            )}
                        </VStack>

                        <Spacer />

                        <Text style={[TextStyle.blue, TextStyle.small]}>
                            {
                                t('register_text_sign_in_up_information').split(
                                    'Terms & Conditions',
                                )[0]
                            }
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                                Terms & Conditions
                            </Text>
                            {
                                t('register_text_sign_in_up_information')
                                    .split('Terms & Conditions')[1]
                                    .split('Privacy Policy')[0]
                            }
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
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
                        />

                        <HStack>
                            <Text style={[TextStyle.blue, TextStyle.small]}>
                                {t('register_text_already_joined')}
                            </Text>
                            <Pressable onPress={navigateLogin}>
                                <Text
                                    style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                                    {t('register_redirect_login')}
                                </Text>
                            </Pressable>
                        </HStack>
                    </VStack>
                </KeyboardAvoidingView>
            </VStack>
        </SafeAreaView>
    );
};

export const RegisterScreen = React.memo(Register);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
    textSpace: {
        padding: 40,
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
        paddingHorizontal: 30,
    },
});
