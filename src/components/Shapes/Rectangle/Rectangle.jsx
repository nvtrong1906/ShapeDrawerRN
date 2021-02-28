import React from 'react';
import { View } from 'react-native';

import styles from './Rectangle.styles';

const Rectangle = (props) => {
    return <View
        {...props}
        style={[styles.rectangle, props.styles]}
    />;
};

export default Rectangle;
