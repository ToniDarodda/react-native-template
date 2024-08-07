import React from "react"
import { StyleSheet, TextInput } from 'react-native';

import { ICommonComponents } from "../types/common-component";
import { Text as TextStyle } from '../styles/text';

interface IInputProps extends ICommonComponents {
    placeHolder?: string;
}

const InputComponent: React.FC<IInputProps> = ({ placeHolder, style }) => {
    return (
        <TextInput placeholderTextColor={'gray'} placeholder={placeHolder} style={[composedInputStyle, style]} />
    )
}

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
    }
})

const composedInputStyle = StyleSheet.compose(inputStyle.container, TextStyle.regular);
