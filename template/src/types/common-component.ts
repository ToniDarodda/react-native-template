import { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from "react-native";

export type ICommonComponents<T> = {
    style?: StyleProp<T>;
    children?: React.ReactNode;
}