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
import { Navbar } from '../components/navbar';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Profile'>;
};

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = async () => {
        await removeCookie();
        dispatch(logoutUser());
        navigation.navigate('Login');
    };

    return (
        <VStack style={styles.container}>
            <Navbar navigation={navigation} />
            <SafeAreaView style={styles.safeArea}>
                <VStack style={styles.content}>
                    <Text>{t('OS')}</Text>
                    <Spacer />
                    <Button text={'Logout'} onPress={handleLogout} containerStyle={styles.buttonLogout} />
                </VStack>
            </SafeAreaView>
        </VStack>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        width: '100%',
        marginBottom: 80,
    },
    content: {
        flex: 1,
        padding: 12,
    },
    buttonLogout: {
        backgroundColor: 'red'
    },
    button: {
        backgroundColor: '#0165fe',
    },
});
