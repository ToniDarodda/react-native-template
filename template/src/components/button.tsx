import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

interface IButtonProps {
    text: string;
    containerStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>;

    onPress?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
    text,
    containerStyle,
    textStyle,
    onPress,
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
                <Text style={[buttonStyle.textContainer, textStyle]}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const buttonStyle = StyleSheet.create({
    container: {
        width: '100%',
        padding: 12,
        borderRadius: 4,
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
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
    },
    containerPressed: {
        shadowOpacity: 0,
        elevation: 0,
    },
    textContainer: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
});
