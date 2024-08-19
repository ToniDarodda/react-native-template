import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { ICommonComponents, IStyle } from '../types/common-component';

interface IHStackProps extends IStyle<ViewStyle> {
    children?: React.ReactNode;
}

const HStackComponent: React.FC<IHStackProps> = ({ children, ...style }) => {
    return (
        <View style={[hstackStyle.container, style as ViewStyle]} testID="hstack-component">
            {children}
        </View>
    );
};

export const HStack = React.memo(HStackComponent);

const hstackStyle = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
});
