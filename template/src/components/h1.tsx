import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { IStyle } from '../types/common-component';
import { Text as TStyle } from '../styles/text';

interface IH1Props extends IStyle<TextStyle> {
    children?: React.ReactNode;
}

const H1Component: React.FC<IH1Props> = ({ children, ...style }) => {
    return <Text style={[composedH1Style, style as TextStyle]}>{children}</Text>;
};

export const H1 = React.memo(H1Component);

const hstackStyle = StyleSheet.create({
    h1: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
    },
});

const composedH1Style = StyleSheet.compose(hstackStyle.h1, TStyle.bold);
