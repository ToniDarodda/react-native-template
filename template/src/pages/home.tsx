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

const Home: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();

    const navigateProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <VStack flex={1}>
            <SafeAreaView style={styles.safeArea}>
                <VStack flex={1} padding={12}>
                    <Text>{t('OS')}</Text>
                    <Spacer />
                    <Button
                        text={'Profile'}
                        onPress={navigateProfile}
                        containerStyle={styles.button}
                    />
                </VStack>
            </SafeAreaView>

            <Navbar navigation={navigation} />
        </VStack>
    );
};

export const HomeScreen = React.memo(Home);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: 80,
        width: '100%',
    },
    button: {
        backgroundColor: '#0165fe',
    },
});
