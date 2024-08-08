import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Button, Spacer, VStack } from '../components';
import { Navbar } from '../components/navbar';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();

    const navigateProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        <VStack style={styles.container}>

            <SafeAreaView style={styles.safeArea}>
                <VStack style={styles.content}>
                    <Text>{t('OS')}</Text>
                    <Spacer />
                    <Button text={'Profile'} onPress={navigateProfile} containerStyle={styles.button} />
                </VStack>
            </SafeAreaView>

            <Navbar navigation={navigation} />
        </VStack>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    safeArea: {
        flex: 1,
        marginBottom: 80,
        width: '100%',
    },
    content: {
        flex: 1,
        padding: 12,

    },
    button: {
        backgroundColor: '#0165fe',
    },
});
