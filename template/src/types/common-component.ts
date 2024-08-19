import { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from "react-native";

export type ICommonComponents<T> = {
    // style?: StyleProp<T>;
    children?: React.ReactNode;
}

type CommonProps<T> = {
    [K in keyof T]?: number | string;
};


export type IStyle<T> = CommonProps<T> & {children?: React.ReactNode};