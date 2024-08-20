import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';

import { MainRootStackParamList } from '../navigations/main-root-stack';
import { VStack, Separator, InputWithIcon, Button, Text } from '../components';
import { useGetUser, useUserPatch } from '../queries/user';

type Props = {
    navigation: NativeStackNavigationProp<
        MainRootStackParamList,
        'UpdateProfile'
    >;
};

const UpdateProfile: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('updateProfile');

    const { data: account, isLoading } = useGetUser();

    const { mutate: patchAccount } = useUserPatch();


    const [input, setInput] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInput(text);
    };

    const updatedProfile = () => {
        patchAccount({ email: input });
        navigation.goBack();
    };

    return (
        <VStack flex={1} backgroundColor={'white'} padding={12} gap={20}>
            <SafeAreaView style={styles.safeArea}>
                <VStack flex={1} justifyContent='flex-start' backgroundColor={'white'} padding={12} gap={20}>
                    <Text fontWeight={'bold'}>{t('text_update_profile')}</Text>
                    <Separator />

                    {isLoading ?
                        <ActivityIndicator />
                        :
                        <VStack alignItems='flex-start'>
                            <Text color={'gray'} fontWeight={'600'}>
                                {t('input_email')}
                            </Text>
                            <InputWithIcon
                                iconName={'email'}
                                textInputProps={{
                                    placeholder: 'Update your email...',
                                    defaultValue: account?.email,
                                }}
                                onChange={handleInputChange}
                            />
                        </VStack>
                    }

                    <Separator />

                    <Button
                        text={t('button_done')}
                        containerStyle={{ backgroundColor: 'black', height: 40, padding: 0 }}
                        onPress={updatedProfile}
                    />
                </VStack>
            </SafeAreaView>
        </VStack>
    );
};

export const UpdateProfileScreen = React.memo(UpdateProfile);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
    },
});
