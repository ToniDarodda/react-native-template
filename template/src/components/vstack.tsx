import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native"

import { ICommonComponents } from "../types/common-component";

interface IVStackProps extends ICommonComponents<ViewStyle> {
    children?: React.ReactNode;
}

const VStackComponent: React.FC<IVStackProps> = ({ children, style }) => {
    return (
        <View style={[vstackStyle.container, style]} testID="vstack-container">
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