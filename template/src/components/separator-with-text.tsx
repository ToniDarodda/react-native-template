import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ICommonComponents } from '../types/common-component';
import { HStack } from './hstack';
import { VStack } from './vstack';
import { Text } from './text';
import { Text as TextStyle } from '../styles/text';

interface ISeparatorWithTextProps extends ICommonComponents<ViewStyle> {
    text?: string;
}

const SeparatorWithTextComponent: React.FC<ISeparatorWithTextProps> = ({ text, style }) => {
    const { t } = useTranslation('component');

    return (
        <HStack style={[separatorStyle.container, style]}>
            <VStack style={separatorStyle.borderContainer} />
            <Text style={composedSeparatorWithTestStyle}>{text ?? t('separator_with_text')}</Text>
            <VStack style={separatorStyle.borderContainer} />
        </HStack>
    )
};

export const SeparatorWithText = React.memo(SeparatorWithTextComponent);


const separatorStyle = StyleSheet.create({
    container: {
        width: '100%',
        gap: 20,
        paddingVertical: 12,
    },
    borderContainer: {
        width: '40%',
        borderColor: '#f1f5f6',
        borderWidth: 1
    },
    textColor: {
        color: '#909aab'
    }
})

const composedSeparatorWithTestStyle = StyleSheet.compose(separatorStyle.textColor, TextStyle.regular);
