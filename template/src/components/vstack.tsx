import React from "react";
import { StyleSheet, View } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface IVStackProps extends ICommonComponents {
    children?: React.ReactNode;
}

const VStackComponent: React.FC<IVStackProps> = ({ children, style }) => {
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