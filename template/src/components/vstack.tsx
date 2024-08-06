import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

interface IVStack {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const VStackComponent: React.FC<IVStack> = ({ children, style }) => {
    return (
        <View style={[vstackStyle.container, style]}>
            {children}
        </View>
    )
}

export const VStack = React.memo(VStackComponent);


const vstackStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})