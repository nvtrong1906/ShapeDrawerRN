import { last } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import * as Sensors from "react-native-sensors";

import Shapes from '../../components/Shapes';

const Painter = ({ route, navigation }) => {
  const { shapeType } = route.params

  const [sensor, setSensor] = useState(null);
  const [shapes, setShapes] = useState([]);
  const [reload, forceReload] = useState(false);

  const createShape = ({ nativeEvent }) => {
    shapes.push(
      <Shapes shapeType={shapeType} nativeEvent={nativeEvent} />
    )
    forceReload(!reload)
  }

  useEffect(() => {
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;

    const acceSensor = Sensors['accelerometer'];
    const subscription = acceSensor
      .subscribe(
        ({ x, y, z, timestamp }) => {
          if (lastTime === 0) {
            lastTime = timestamp;
            lastX = x;
            lastY = y;
            lastZ = z;
          } else {
            if (Math.abs(x, lastX) > 5 || Math.abs(y, lastY) > 5 || Math.abs(z, lastZ) > 5) {
              setShapes([])
            }
          }
        }
      );

    setSensor(subscription);
    return () => {
      !!sensor && sensor.unsubscribe();
      setSensor(null);
    };
  }, [])

  return (
    <TouchableWithoutFeedback
      onPress={createShape}
    >
      <View
        style={{ flex: 1, backgroundColor: '#FFF' }}
      >
        {shapes.map((shape) => shape)}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Painter;