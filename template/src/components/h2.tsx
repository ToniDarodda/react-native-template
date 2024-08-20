import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { IStyle } from '../types/common-component';
import { Text as TStyle } from '../styles/text';

interface IH2Props extends IStyle<TextStyle> {
    children?: React.ReactNode;
}

const H2Component: React.FC<IH2Props> = ({ children, ...style }) => {
    return <Text style={[composedH2Style, style as TextStyle]}>{children}</Text>;
};

export const H2 = React.memo(H2Component);

const hstackStyle = StyleSheet.create({
    h2: {
        fontSize: 28,
        color: 'black',
    },
});

const composedH2Style = StyleSheet.compose(hstackStyle.h2, TStyle.bold);
