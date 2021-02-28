import React from 'react';
import { Image } from 'react-native';

import styles from './Square.styles';

const Square = (props) => {
    return <Image
        {...props}
        source={{ uri: props.imageUri }}
        style={[
            styles.square,
            props.styles,
            { zIndex: 10, height: props.styles.width, backgroundColor: props.color }]}
    />;
};

export default Square;
