import React from "react"

import { StyleSheet, TextInput } from 'react-native';
import { ICommonComponents } from "../types/common-component";

interface IInputProps extends ICommonComponents { }

const InputComponent: React.FC<IInputProps> = ({ style }) => {
    return (
        <TextInput style={[inputStyle.input, style]}></TextInput>
    )
}

export const Input = React.memo(InputComponent);

const inputStyle = StyleSheet.create({
    input: {
        padding: 12,
        backgroundColor: 'white',
        width: 'auto',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        minHeight: 48
    }
})