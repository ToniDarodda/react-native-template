import React from "react";
import { StyleSheet, Text as RText } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface ITextProps extends ICommonComponents {
    children?: React.ReactNode;
}

const TextComponent: React.FC<ITextProps> = ({ children, style }) => {
    return (
        <RText style={[hstackStyle.h1, style]}>
            {children}
        </RText>
    )
}

export const Text = React.memo(TextComponent);

const hstackStyle = StyleSheet.create({
    h1: {
        fontSize: 16,
        color: 'black'
    }
})