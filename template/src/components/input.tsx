import React from "react"

import { StyleSheet, TextInput } from 'react-native';
import { ICommonComponents } from "../types/common-component";

interface IInputProps extends ICommonComponents {
    placeHolder?: string;
}

const InputComponent: React.FC<IInputProps> = ({ placeHolder, style }) => {
    return (
        <TextInput placeholderTextColor={'gray'} placeholder={placeHolder} style={[inputStyle.input, style]} />
    )
}

export const Input = React.memo(InputComponent);

const inputStyle = StyleSheet.create({
    input: {
        padding: 12,
        backgroundColor: 'white',
        width: 'auto',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        minHeight: 48,
        minWidth: '100%',

    }
})