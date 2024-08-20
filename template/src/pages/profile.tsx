import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

import { VStack, Spacer, Button, Text, HStack, Switch, Image } from '../components';
import { MainRootStackParamList } from '../navigations/main-root-stack';
import { AppDispatch } from '../stores/store';
import { logoutUser } from '../stores/slices/user-slice';
import { removeCookie } from '../utils/cookie-manager';
import { Navbar } from '../components/navbar';
import { useGetUser, useUserDelete } from '../queries/user';

type Props = {
    navigation: NativeStackNavigationProp<MainRootStackParamList, 'Profile'>;
};

const Profile: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation('profile');

    const dispatch = useDispatch<AppDispatch>();

    const { data: account } = useGetUser();
    const { mutate: deleteAccount } = useUserDelete();

    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    const updateProfile = () => {
        navigation.navigate('UpdateProfile');
    }

    const handleDeleteAccount = () => {
        setModalVisible(true);
    }

    const confirmDeleteAccount = () => {
        setModalVisible(false);
        deleteAccount();
        navigation.navigate('Welcome');
    }

    const handleLogout = async () => {
        await removeCookie();
        dispatch(logoutUser());
        navigation.navigate('Login');
    };

    return (
        <VStack flex={1}>
            <SafeAreaView style={styles.safeArea}>
                <VStack flex={1} padding={12}>
                    <VStack
                        width={'auto'}
                        justifyContent='center'
                        alignItems='center'
                        gap={20}
                    >
                        <VStack>
                            <Image
                                source={require('../assets/avatar.jpg')}
                                borderRadius={100}
                                width={200}
                                height={200}
                            />
                            <Text fontWeight={'bold'} color={'black'}>
                                {account?.firstName} {account?.lastName}
                            </Text>
                            <Text fontSize={12} color={'gray'}>
                                {account?.email}
                            </Text>
                        </VStack>

                        <Button
                            text={'Edit profile'}
                            containerStyle={{
                                backgroundColor: 'black',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: 40,
                                padding: 0,
                                width: 120,
                                borderRadius: 20,
                            }}
                            textStyle={{ fontSize: 14 }}
                            onPress={updateProfile}
                        />
                    </VStack>

                    <Spacer />
                    <HStack justifyContent='flex-start' marginTop={20}>
                        <Text fontSize={13}>{t('text_preferences')}</Text>
                    </HStack>

                    <VStack
                        backgroundColor={'#fafafa'}
                        borderWidth={1}
                        borderColor={'#F3F3F3'}
                        alignItems='flex-start'
                        justifyContent='space-around'
                        padding={24}
                        borderRadius={12}
                        gap={20}
                    >
                        <HStack justifyContent='space-between'>
                            <HStack width={'auto'} justifyContent='flex-start'>
                                <Icon name="notification" size={18} color="gray" />
                                <Text>{t('text_notification')}</Text>
                            </HStack>
                            <Switch />
                        </HStack>
                        <HStack justifyContent='space-between'>
                            <TouchableOpacity onPress={handleDeleteAccount}>
                                <HStack width={'auto'} justifyContent='flex-start'>
                                    <Icon name="cup" size={18} color="red" />
                                    <Text color={'red'}>{t('text_delete')}</Text>
                                </HStack>
                            </TouchableOpacity>
                        </HStack>
                        <HStack justifyContent='space-between'>
                            <TouchableOpacity onPress={handleLogout}>
                                <HStack width={'auto'} justifyContent='flex-start'>
                                    <Icon name="user" size={18} color="gray" />
                                    <Text>{t('text_log_out')}</Text>
                                </HStack>
                            </TouchableOpacity>
                        </HStack>
                    </VStack>
                </VStack>
            </SafeAreaView>
            <Navbar navigation={navigation} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <VStack flex={1} justifyContent='center' alignItems='center' backgroundColor={'rgba(0, 0, 0, 0.5)'}>
                    <VStack width={300} backgroundColor={'white'} borderRadius={10} padding={20} alignItems='center'>
                        <Text fontSize={18} marginBottom={20} textAlign='center'>{t('text_confirm_delete')}</Text>
                        <VStack justifyContent='space-between' width={'100%'}>
                            <Button
                                text={t('text_cancel')}
                                onPress={() => setModalVisible(false)}
                                containerStyle={styles.modalButtonCancel}
                            />
                            <Button
                                text={t('text_confirm')}
                                onPress={confirmDeleteAccount}
                                containerStyle={styles.modalButtonConfirm}
                            />
                        </VStack>
                    </VStack>
                </VStack>
            </Modal >
        </VStack >
    );
};

export const ProfileScreen = React.memo(Profile);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
        marginBottom: 80,
    },
    modalButtonCancel: {
        backgroundColor: 'black',
    },
    modalButtonConfirm: {
        backgroundColor: 'red',
    },
});
