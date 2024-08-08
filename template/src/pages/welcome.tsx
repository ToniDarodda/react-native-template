import React from 'react';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    H1,
    Image,
    Spacer,
    Text,
    VStack,
    Button,
    HStack,
} from '../components';
import { MainRootStackParamList } from '../navigations/main-root-stack';
import globalStyles from '../styles/global';
import { Text as TextStyle } from '../styles/text';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Welcome'>;
};

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('welcome');

    const handleNavigationRegister = () => {
        navigation.navigate('Register');
    };
    const handleNavigationLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.overlayContainer}>
            <VStack style={styles.inner}>
                <Image
                    source={require('../assets/bg-6.jpg')}
                    style={styles.backgroundImage}
                />

                <VStack style={[styles.inner, globalStyles.alignItemsCenter]}>
                    <H1 style={TextStyle.blue}>{t('main_title_app')}</H1>
                    <Text style={TextStyle.blue}>{t('summary_title_app')}</Text>

                    <Spacer />

                    <Button
                        containerStyle={styles.button}
                        text={t('getting_started_button')}
                        onPress={handleNavigationRegister}
                    >
                        <Icon name={'arrow-forward-circle-outline'} size={24} color="white" style={{ position: 'absolute', right: 20 }} />
                    </Button>
                    <HStack>
                        <Text style={[TextStyle.blue, TextStyle.small]}>
                            {t('welcome_text_already_joined')}
                        </Text>
                        <Pressable onPress={handleNavigationLogin}>
                            <Text style={[TextStyle.purple, TextStyle.small, TextStyle.bold]}>
                                {t('welcome_redirect_login')}
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
        height: 300,
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
