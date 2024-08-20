import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native"

import { IStyle } from "../types/common-component";

interface IVStackProps extends IStyle<ViewStyle> {
    children?: React.ReactNode;
}

const VStackComponent: React.FC<IVStackProps> = ({ children, ...style }) => {
    return (
        <View style={[vstackStyle.container, style as ViewStyle]} testID="vstack-container">
            {children}
        </View>
    )
}

export const VStack = React.memo(VStackComponent);


const vstackStyle = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8,
    }
})