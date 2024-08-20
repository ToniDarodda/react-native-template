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
                        <VStack >
                            <H1 color={'#263759'}>{t('register_h1_text')}</H1>
                            <Text color={'#263759'}>{t('register_text_information')}</Text>
                        </VStack>

                        <VStack gap={20}>
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
                                <Text
                                    fontSize={13}
                                    fontFamily={'OpenSans-Medium'}
                                    textAlign={'left'}
                                    width={'100%'}
                                    paddingHorizontal={30}>
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
                                <Text
                                    fontSize={13}
                                    fontFamily={'OpenSans-Medium'}
                                    textAlign={'left'}
                                    width={'100%'}
                                    paddingHorizontal={30}>
                                    {errors.lastName.message}
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
                        />

                        <HStack>
                            <Text
                                color={'#263759'}
                                fontSize={13}
                                fontFamily={'OpenSans-Medium'}>
                                {t('register_text_already_joined')}
                            </Text>
                            <Pressable onPress={navigateLogin}>
                                <Text
                                    color={'#263759'}
                                    fontSize={13}
                                    fontFamily={'OpenSans-Bold'}>
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
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#0165fe',
    },
});
