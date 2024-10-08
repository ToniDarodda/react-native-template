import React from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

import { IStyle } from '../types/common-component';
import { Text as TextStyle } from '../styles/text';

interface IInputProps extends IStyle<ViewStyle> {
    placeHolder?: string;
    onChange?: (text: string) => void;
}

const InputComponent: React.FC<IInputProps> = ({ placeHolder, onChange, ...style }) => {
    return (
        <TextInput
            placeholderTextColor={'gray'}
            placeholder={placeHolder}
            style={[composedInputStyle, style as ViewStyle]}
            onChangeText={onChange}
            testID="input-component"
        />
    );
};

export const Input = React.memo(InputComponent);

const inputStyle = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: 'white',
        width: 'auto',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderColor: '#e9eaed',
        minHeight: 48,
        minWidth: '100%',
    },
});

const composedInputStyle = StyleSheet.compose(
    inputStyle.container,
    TextStyle.regular,
);
