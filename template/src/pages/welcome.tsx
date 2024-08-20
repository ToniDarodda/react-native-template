import React from 'react';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import { H1, Image, Spacer, Text, VStack, Button, HStack } from '../components';
import { MainRootStackParamList } from '../navigations/main-root-stack';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Welcome'>;
};

const Welcome: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('welcome');

    const handleNavigationRegister = () => {
        navigation.navigate('Register');
    };

    const handleNavigationLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack
                flex={1}
                padding={12}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={12}>
                <Image
                    source={require('../assets/bg-6.jpg')}
                    width={300}
                    height={300}
                />

                <VStack
                    flex={1}
                    padding={12}
                    width={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={12}>
                    <H1 color={'#263759'}>{t('main_title_app')}</H1>
                    <Text color={'#263759'}>{t('summary_title_app')}</Text>

                    <Spacer />

                    <Button
                        containerStyle={styles.button}
                        text={t('getting_started_button')}
                        onPress={handleNavigationRegister}>
                        <Icon
                            name={'arrow-forward-circle-outline'}
                            size={24}
                            color="white"
                            style={styles.icon}
                        />
                    </Button>
                    <HStack>
                        <Text
                            color={'#263759'}
                            fontSize={13}
                            fontFamily={'OpenSans-Medium'}>
                            {t('welcome_text_already_joined')}
                        </Text>
                        <Pressable onPress={handleNavigationLogin}>
                            <Text
                                color={'#0165fe'}
                                fontSize={13}
                                fontFamily={'OpenSans-Bold'}>
                                {t('welcome_redirect_login')}
                            </Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </VStack>
        </SafeAreaView>
    );
};

export const WelcomeScreen = React.memo(Welcome);

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon: {
        position: 'absolute',
        right: 20,
    },
    button: {
        backgroundColor: '#0165fe',
    },
});
