import React, { useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';

import { HStack } from './hstack';
import { Text } from '../styles/text';
import { IStyle } from '../types/common-component';
import globalStyles from '../styles/global';

interface ISearchBarProps extends IStyle<ViewStyle> {
    onSearch?: (val: string) => void;
}

const SearchBarComponent: React.FC<ISearchBarProps> = ({ onSearch, children, ...style }) => {
    const { t } = useTranslation('component');

    const inputRef = useRef<TextInput>(null);

    const handlePress = () => {
        inputRef.current?.focus();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={globalStyles.fullWidth}>
            <HStack
                width={'100%'}
                height={38}
                borderRadius={4}
                padding={12}
                paddingLeft={44}
                justifyContent={'flex-start'}
                backgroundColor={'#f2f2f2'} {...style}>
                <TextInput
                    ref={inputRef}
                    placeholder={t('search_bar_placeholder')}
                    placeholderTextColor={'#858489'}
                    style={Text.medium}
                    onChangeText={onSearch}
                />
                <Icon
                    name={'search1'}
                    size={20}
                    color="#c8cdd6"
                    style={searchBarStyle.icon}
                />
            </HStack>
        </TouchableOpacity>
    );
};

export const SearchBar = React.memo(SearchBarComponent);

const searchBarStyle = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
        color: '#858489',
    },
});
