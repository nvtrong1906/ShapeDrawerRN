import React from 'react';
import { View } from 'react-native';

import styles from './Octagon.styles';

const Octagon = (props) => {
    return (
        <View style={[styles.octagon, props.styles]}>
            <View style={[styles.octagonUp, styles.octagonBar]} />
            <View style={[styles.octagonFlat, styles.octagonBar]} />
            <View style={[styles.octagonLeft, styles.octagonBar]} />
            <View style={[styles.octagonRight, styles.octagonBar]} />
        </View>
    );
};

export default Octagon;
