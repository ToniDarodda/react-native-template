import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text } from 'react-native';

export const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={{ height: 600, justifyContent: 'center', backgroundColor: 'red', marginTop: 100 }}>
            <Text>{t('OS')}</Text>
            <Text>{t('OS')}</Text>
            <Text>{t('OS')}</Text>
            <Text>{t('OS')}</Text>
            <Text>{t('OS')}</Text>
        </SafeAreaView>
    );
};
