import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Shapes from '../../components/Shapes';

const Painter = ({ route, navigation }) => {
  const { shapeType } = route.params

  const [shapes, setShapes] = useState([]);
  const [reload, forceReload] = useState(false);

  const createShape = ({ nativeEvent }) => {
    shapes.push(
      <Shapes shapeType={shapeType} nativeEvent={nativeEvent} />
    )
    forceReload(!reload)
  }

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