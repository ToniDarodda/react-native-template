import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ICommonComponents {
    style?: StyleProp<ViewStyle | TextStyle>;
    children?: React.ReactNode;
}