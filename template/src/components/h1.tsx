import React from "react";
import { StyleSheet, Text } from "react-native"
import { ICommonComponents } from "../types/common-component";
import { Text as TextStyle } from '../styles/text';

interface IH1Props extends ICommonComponents {
    children?: React.ReactNode;
}

const H1Component: React.FC<IH1Props> = ({ children, style }) => {
    return (
        <Text style={[composedH1Style, style]}>
            {children}
        </Text>
    )
}

export const H1 = React.memo(H1Component);

const hstackStyle = StyleSheet.create({
    h1: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
    }
})

const composedH1Style = StyleSheet.compose(hstackStyle.h1, TextStyle.bold);