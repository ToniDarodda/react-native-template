import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ICommonComponents } from '../types/common-component';

interface ISeparatorProps extends ICommonComponents { }

const SeparatorComponent: React.FC<ISeparatorProps> = ({ style, children }) => {
    return (
        <View style={[separatorStyle.separator, style]} testID="separator">
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
