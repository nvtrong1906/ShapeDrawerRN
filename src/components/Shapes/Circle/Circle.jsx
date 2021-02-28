import React from 'react';
import { Image } from 'react-native';

import styles from './Circle.styles';

const Circle = (props) => {
    return <Image
        {...props}
        source={{ uri: props.imageUri || '' }}
        style={[styles.circle, props.styles,
        {
            zIndex: 10, 
            width: props.styles.width,
            height: props.styles.width,
            borderRadius: props.styles.width / 2,
            backgroundColor: props.color
        }]}
    />;
};

export default Circle;