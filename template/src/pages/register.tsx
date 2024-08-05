import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text } from 'react-native';

export const RegisterScreen = () => {
    const { t } = useTranslation();

    return (
        <SafeAreaView>
            <Text>{t('OS')}</Text>
        </SafeAreaView>
    );
};
