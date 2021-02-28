import React from 'react';
import { View } from 'react-native';

import styles from './Pentagon.styles';

const Pentagon = (props) => {
    return <View style={[styles.pentagon, props.styles]}>
        <View style={styles.pentagonInner} />
        <View style={styles.pentagonBefore} />
    </View>;
};

export default Pentagon;
