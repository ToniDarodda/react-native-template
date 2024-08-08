import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    TouchableWithoutFeedback,
    ActivityIndicator,
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
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
        if (onPress) onPress();
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <View
                style={[
                    buttonStyle.container,
                    isPressed && buttonStyle.containerPressed,
                    containerStyle,
                ]}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        <Text style={[composedButtonStyle, textStyle]}>{text}</Text>
                        {children}
                    </>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const buttonStyle = StyleSheet.create({
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
    containerPressed: {
        shadowOpacity: 0,
        elevation: 0,
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
