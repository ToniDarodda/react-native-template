import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>{t('OS')}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
