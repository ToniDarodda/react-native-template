import React from "react";
import { StyleSheet, Text } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface IH1Props extends ICommonComponents {
    children?: React.ReactNode;
}

const H1Component: React.FC<IH1Props> = ({ children, style }) => {
    return (
        <Text style={[hstackStyle.h1, style]}>
            {children}
        </Text>
    )
}

export const H1 = React.memo(H1Component);

const hstackStyle = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
    }
})