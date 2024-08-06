import React, { useState } from "react"
import { Switch as RSwitch, StyleSheet } from "react-native"
import { ICommonComponents } from "../types/common-component";

interface ISwitchProps extends ICommonComponents { }

const SwitchComponent: React.FC<ISwitchProps> = ({ style }) => {
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const isPressed = () => {
        setIsToggle((prev) => !prev);
    }

    return (
        <RSwitch style={[switchStyle.switch, style]} onChange={isPressed} value={isToggle} />
    )
}

export const Switch = React.memo(SwitchComponent);

const switchStyle = StyleSheet.create({
    switch: {
        padding: 12
    }
})