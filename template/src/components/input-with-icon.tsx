import React from 'react';

import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { ICommonComponents } from '../types/common-component';
import { Text as TextStyle } from '../styles/text';
import Icon from 'react-native-vector-icons/Entypo';
import { HStack } from './hstack';

interface IInputWithIconProps extends ICommonComponents {
    iconName: string;
    onChange?: (text: string) => void | undefined;
    placeHolder?: string | undefined;
    keyboardType?: KeyboardTypeOptions | undefined;
    secureTextEntry?: boolean | undefined
}

const InputWithIconComponent: React.FC<IInputWithIconProps> = ({
    placeHolder,
    iconName,
    keyboardType,
    secureTextEntry,
    onChange,
    style,
}) => {
    return (
        <HStack style={{ paddingLeft: 12, paddingRight: 12 }}>
            <Icon name={iconName} size={20} color="#c8cdd6" />
            <TextInput
                placeholderTextColor={'gray'}
                placeholder={placeHolder}
                style={[composedInputStyle, style]}
                onChangeText={onChange}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
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
    icon: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
});

const composedInputStyle = StyleSheet.compose(
    inputStyle.container,
    TextStyle.regular,
);
