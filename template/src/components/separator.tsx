import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { ICommonComponents, IStyle } from '../types/common-component';

interface ISeparatorProps extends IStyle<ViewStyle> { }

const SeparatorComponent: React.FC<ISeparatorProps> = ({ children, ...style }) => {
    return (
        <View style={[separatorStyle.separator, style as ViewStyle]} testID="separator">
            {children}
        </View>
    );
};

export const Separator = React.memo(SeparatorComponent);

const separatorStyle = StyleSheet.create({
    separator: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f6',
    },
});
