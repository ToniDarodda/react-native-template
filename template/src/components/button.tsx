import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import { Text as ITextStyle } from '../styles/text';
import { ICommonComponents } from '../types/common-component';

interface IButtonProps extends ICommonComponents {
    text: string;
    isLoading?: boolean | undefined;
    containerStyle?: StyleProp<TextStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;

    onPress?: () => void | undefined | Promise<void>;
}

export const Button: React.FC<IButtonProps> = ({
    text,
    isLoading,
    containerStyle,
    textStyle,
    onPress,
    children,
}) => {

    return (
        <TouchableOpacity
            onPress={onPress} style={buttonStyle.touchable}>
            <View
                style={[
                    buttonStyle.container,
                    containerStyle,
                ]}>
                {isLoading ? (
                    <ActivityIndicator testID="activity-indicator" />
                ) : (
                    <>
                        <Text style={[composedButtonStyle, textStyle]}>{text}</Text>
                        {children}
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

const buttonStyle = StyleSheet.create({
    touchable: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.4,
        elevation: 3,
    },
    textContainer: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
});

const composedButtonStyle = StyleSheet.compose(
    buttonStyle.textContainer,
    ITextStyle.medium,
);
