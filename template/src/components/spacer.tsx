import React from "react"
import { StyleSheet, View } from "react-native"

const SpacerComponent = () => {
    return <View style={spacerStyle.container} testID="spacer" />
}

export const Spacer = React.memo(SpacerComponent);

const spacerStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})