import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { VStack, Spacer, Button, Text } from '../components';
import { MainRootStackParamList } from '../navigations/main-root-stack';
import { AppDispatch } from '../stores/store';
import { logoutUser } from '../stores/slices/user-slice';
import { removeCookie } from '../utils/cookie-manager';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Profile'>;
};

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = async () => {
        try {
            await removeCookie();
            dispatch(logoutUser());
            navigation.navigate('Login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <VStack style={styles.container}>
                <Text>{t('OS')}</Text>
                <Spacer />
                <Button text={'Logout'} onPress={handleLogout} containerStyle={styles.button} />
            </VStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    button: {
        backgroundColor: 'red',
    },
});
