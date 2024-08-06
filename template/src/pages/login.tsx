import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { Button } from '../components/button';

export const LoginScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={{ height: 600, justifyContent: 'center', marginTop: 100 }}>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Button text={t('login_button')} />
            </View>

        </SafeAreaView>
    );
};
