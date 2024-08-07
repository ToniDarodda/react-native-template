import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { Button, Spacer, VStack } from '../components';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Home'>;
};


export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();

    const navigateProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        <SafeAreaView style={styles.container}>
            <VStack style={styles.container}>
                <Text>{t('OS')}</Text>
                <Spacer />
                <Button text={'Profile'} onPress={navigateProfile} containerStyle={styles.button} />

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
        backgroundColor: '#0165fe'
    }
});
