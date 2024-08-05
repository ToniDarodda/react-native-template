import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from '../components/button';

export const LoginScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={{ height: 600, justifyContent: 'center', marginTop: 100 }}>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <Text>{t('OS')}</Text>
                <Text>{t('OS')}</Text>
                <Text>{t('OS')}</Text>
                <Text>{t('OS')}</Text>
                <Text>{t('OS')}</Text>

                <Button text={t('os')} />
            </View>

        </SafeAreaView>
    );
};
