import React from 'react';
import {
    StyleSheet,
    View,
    Image as RImage,
    ImageStyle,
    ImageSourcePropType,
    ViewStyle,
} from 'react-native';

import { ICommonComponents } from '../types/common-component';

interface IImageProps extends ICommonComponents<ViewStyle> {
    source: ImageSourcePropType;
}

const ImageComponent: React.FC<IImageProps> = ({ source, style }) => {
    return (
        <View style={[style]}>
            <RImage
                source={source}
                resizeMode="cover"
                style={[imageStyle.image, style as ImageStyle]}
                testID="image-component"
            />
        </View>
    );
};

export const Image = React.memo(ImageComponent);

const imageStyle = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 8,
    },
});
