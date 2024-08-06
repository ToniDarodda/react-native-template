import React from "react";
import { StyleSheet, View } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface IHStackProps extends ICommonComponents {
    children?: React.ReactNode;
}

const HStackComponent: React.FC<IHStackProps> = ({ children, style }) => {
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