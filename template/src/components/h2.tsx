import React from "react";
import { StyleSheet, Text } from "react-native"
import { ICommonComponents } from "../types/common-component";
import { Text as TextStyle } from '../styles/text';

interface IH2Props extends ICommonComponents {
    children?: React.ReactNode;
}

const H2Component: React.FC<IH2Props> = ({ children, style }) => {
    return (
        <Text style={[composedH2Style, style]}>
            {children}
        </Text>
    )
}

export const H2 = React.memo(H2Component);

const hstackStyle = StyleSheet.create({
    h2: {
        fontSize: 28,
        color: 'black'
    }
})

const composedH2Style = StyleSheet.compose(hstackStyle.h2, TextStyle.bold);