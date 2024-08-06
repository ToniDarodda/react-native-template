import React from "react";
import { StyleSheet, Text } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface IH2Props extends ICommonComponents {
    children?: React.ReactNode;
}

const H2Component: React.FC<IH2Props> = ({ children, style }) => {
    return (
        <Text style={[hstackStyle.h2, style]}>
            {children}
        </Text>
    )
}

export const H2 = React.memo(H2Component);

const hstackStyle = StyleSheet.create({
    h2: {
        fontSize: 28,
        fontWeight: '500',
        color: 'black'
    }
})