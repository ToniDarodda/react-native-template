import React, { useState } from 'react';
import { Switch as RSwitch, StyleSheet, ViewStyle } from 'react-native';

import { IStyle } from '../types/common-component';

interface ISwitchProps extends IStyle<ViewStyle> { }

const SwitchComponent: React.FC<ISwitchProps> = ({ ...style }) => {
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const toggleSwitch = (value: boolean) => {
        setIsToggle(value);
    };

    return (
        <RSwitch
            style={[switchStyle.switch, style as ViewStyle]}
            onValueChange={toggleSwitch}
            value={isToggle}
            thumbColor={isToggle ? 'white' : '#f4f3f4'}
        />
    );
};

export const Switch = React.memo(SwitchComponent);

const switchStyle = StyleSheet.create({
    switch: {
        padding: 12,
    },
});
