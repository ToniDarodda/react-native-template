import React from 'react';

import {
    StyleSheet,
    TextInput,
    TextInputProps,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { IStyle } from '../types/common-component';
import { Text as TextStyle } from '../styles/text';
import { HStack } from './hstack';

interface IInputWithIconProps extends IStyle<ViewStyle> {
    iconName: string;
    onChange?: (text: string) => void | undefined;
    error?: boolean | undefined;
    textInputProps?: TextInputProps | undefined;
}

const InputWithIconComponent: React.FC<IInputWithIconProps> = ({
    iconName,
    textInputProps,
    error,
    onChange,
    ...style
}) => {
    return (
        <HStack paddingLeft={12} paddingRight={12}>
            <Icon name={iconName} size={20} color="#c8cdd6" />
            <TextInput
                placeholderTextColor={'gray'}
                style={[composedInputStyle, error && inputStyle.error, style as ViewStyle]}
                onChangeText={onChange}
                {...textInputProps}
                testID="text-input"
            />
        </HStack>
    );
};

export const InputWithIcon = React.memo(InputWithIconComponent);

const inputStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderColor: '#e9eaed',
        minHeight: 48,
    },
    horizontalPadding: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    icon: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    error: {
        borderBottomWidth: 1,
        borderColor: 'red',
    },
});

const composedInputStyle = StyleSheet.compose(
    inputStyle.container,
    TextStyle.regular,
);
