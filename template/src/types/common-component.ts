import { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from "react-native";

export interface ICommonComponents {
    style?: StyleProp<ViewStyle | TextStyle | FlexStyle | TransformsStyle>;
    children?: React.ReactNode;
}