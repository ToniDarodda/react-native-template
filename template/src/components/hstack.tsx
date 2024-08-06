import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

interface IHStack {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const HStackComponent: React.FC<IHStack> = ({ children, style }) => {
    return (
        <View style={[hstackStyle.container, style]}>
            {children}
        </View>
    )
}

export const HStack = React.memo(HStackComponent);


const hstackStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
})