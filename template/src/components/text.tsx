import React from "react";
import { StyleSheet, Text as RText } from "react-native"
import { ICommonComponents } from "../types/common-component";
import { Text as TextStyle } from '../styles/text';

interface ITextProps extends ICommonComponents {
    children?: React.ReactNode;
}

const TextComponent: React.FC<ITextProps> = ({ children, style }) => {
    return (
        <RText style={[composedH2Style, style]}>
            {children}
        </RText>
    )
}

export const Text = React.memo(TextComponent);

const hstackStyle = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black'
    }
})

const composedH2Style = StyleSheet.compose(hstackStyle.text, TextStyle.regular);