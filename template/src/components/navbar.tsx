import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { HStack } from './hstack';
import { IStyle } from '../types/common-component';
import { MainRootStackParamList } from '../navigations/main-root-stack';

interface INavbarProps extends IStyle<ViewStyle> {
    navigation: NativeStackNavigationProp<
        MainRootStackParamList,
        keyof MainRootStackParamList
    >;
}

const NavBarComponent: React.FC<INavbarProps> = ({ navigation, ...style }) => {
    const handleNavigate = (
        name: keyof Omit<MainRootStackParamList, 'RegisterPIS'>,
    ) => {
        navigation.navigate(name);
    };

    return (
        <HStack
            position={'absolute'}
            borderTopWidth={1}
            borderColor={'#c8cdd6'}
            bottom={0}
            left={0}
            right={9}
            height={88}
            width={'100%'}
            justifyContent={'space-around'}
            padding={16}
            alignItems={'flex-start'}>
            <Pressable onPress={() => handleNavigate('Home')}>
                <Icon name={'home'} size={24} color="#c8cdd6" />
            </Pressable>
            <Pressable onPress={() => handleNavigate('Home')}>
                <Icon name={'search1'} size={24} color="#c8cdd6" />
            </Pressable>
            <Pressable onPress={() => handleNavigate('Home')}>
                <Icon name={'tago'} size={24} color="#c8cdd6" />
            </Pressable>
            <Pressable onPress={() => handleNavigate('Profile')}>
                <Icon name={'book'} size={24} color="#c8cdd6" />
            </Pressable>
        </HStack>
    );
};

export const Navbar = React.memo(NavBarComponent);
