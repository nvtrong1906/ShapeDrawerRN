import React from 'react';
import { View } from 'react-native';

import styles from './Hexagon.styles';

const Hexagon = (props) => {
    return <View style={[styles.hexagon, props.styles]}>
        <View style={styles.hexagonInner} />
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
    </View>
};

export default Hexagon;
