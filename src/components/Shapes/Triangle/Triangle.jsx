import React from 'react';
import { View, Image } from 'react-native';
import styles from './Triangle.styles';

const Triangle = (props) => {
    return (
        <View style={props.styles}>
            <View
                style={[
                    styles.outlineTriangle,
                    {
                        zIndex: 1,
                        borderBottomWidth: props.styles.width,
                        borderLeftWidth: props.styles.width / 2,
                        borderRightWidth: props.styles.width / 2,
                    }]} >
            </View>
            <Image
                source={{ uri: props.imageUri }}
                style={{
                    zIndex: 0,
                    position: 'absolute',
                    width: props.styles.width,
                    height: props.styles.width,
                    backgroundColor: props.color
                }} />
        </View>
    );
};

export default Triangle;