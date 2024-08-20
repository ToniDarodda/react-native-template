import React from "react";
import { StyleSheet, Text as RText, TextStyle } from "react-native"

import { IStyle } from "../types/common-component";
import { Text as TStyle } from '../styles/text';

interface ITextProps extends IStyle<TextStyle> {
    children?: React.ReactNode;
}

const TextComponent: React.FC<ITextProps> = ({ children, ...style }) => {
    return (
        <RText style={[composedH2Style, style as TextStyle]}>
            {children}
        </RText>
    )
}

export const Text = React.memo(TextComponent);

const hstackStyle = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    }
})

const composedH2Style = StyleSheet.compose(hstackStyle.text, TStyle.regular);