import React from 'react';
import {
    StyleSheet,
    View,
    Image as RImage,
    ImageStyle,
    ImageSourcePropType,
} from 'react-native';
import { ICommonComponents } from '../types/common-component';

interface IImageProps extends ICommonComponents {
    source: ImageSourcePropType;
}

const ImageComponent: React.FC<IImageProps> = ({ source, style }) => {
    return (
        <View style={[imageStyle.container, style]}>
            <RImage
                source={source}
                resizeMode="cover"
                style={[imageStyle.image, style as ImageStyle]}
            />
        </View>
    );
};

export const Image = React.memo(ImageComponent);

const imageStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        zIndex: -1,
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 8
    }
});
