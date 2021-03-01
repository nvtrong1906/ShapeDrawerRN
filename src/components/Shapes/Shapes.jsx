import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableWithoutFeedback, View, Animated, PanResponder } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import Circle from './Circle';
import Triangle from './Triangle';
import Square from './Square';

import Utils from '../../utils/utils';
import CONSTANTS from '../../consts/shape.constants';

const {
  DELAY_TIME,
  COLOR_URI,
  IMAGE_URI,
} = CONSTANTS;

const screenWidth = Dimensions.get('screen').width;

const Shapes = ({ shapeType, nativeEvent }) => {
  const [randomSize, setRandomSize] = useState(10);
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [panResponder, setPanResponder] = useState({});
  const locationX = !nativeEvent.locationX ? _.get(nativeEvent, ['changedTouches', '1', 'locationX']) : nativeEvent.locationX;
  const locationY = !nativeEvent.locationX ? _.get(nativeEvent, ['changedTouches', '1', 'locationY']) : nativeEvent.locationY;

  const [currentShapeType, setShapeType] = useState(shapeType);
  const [filledElement, setFilledElement] = useState(null);

  let firstPress = true;
  let lastTime = new Date();
  let timer = false;


  useEffect(() => {
    getFilledElement(currentShapeType);
    setRandomSize(Utils.randomIntFromInterval(10, 45));
    let val = {
      x: 0,
      y: 0,
    }
    pan.addListener((value) => {
      val = value
    });
    setPanResponder(PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: val.x,
          y: val.y
        })
        this.state.pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: val.x, dy: val.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
      }
    }));
  }, [])

  renderShape = () => {
    const Component = getShapeComponent(currentShapeType);
    return (
      <Component
        styles={{
          // position: 'absolute',
          // top: locationY - (screenWidth * randomSize / 100 / 2),
          // left: locationX - (screenWidth * randomSize / 100 / 2),
          width: screenWidth * randomSize / 100,
        }}
        color={`#${filledElement}`}
        imageUri={filledElement}
      />
    );
  };

  const getResource = (resourceUri, path = []) => {
    axios.get(resourceUri)
      .then(res => {
        setFilledElement(_.get(res, path))
      })
      .catch(ex => {
        setFilledElement(Utils.getRandomColor())
      });
  }

  const getShapeComponent = (shapeType) => {
    switch (shapeType) {
      case 0:
        currentShapeType !== shapeType && setShapeType(0);
        return Circle;
        ;
      case 4:
        currentShapeType !== shapeType && setShapeType(4);
        return Square;
      case 3:
        currentShapeType !== shapeType && setShapeType(3);
        return Triangle;
      case -1:
      default:
        const randomInt = Utils.randomIntFromInterval(-1, 4);
        return getShapeComponent(randomInt);
    }
  }

  const getFilledElement = async (filledType) => {
    switch (filledType) {
      case 0:
        getResource(COLOR_URI, ['data', '0', 'hex']);
        break;
      case 4:
        getResource(IMAGE_URI, ['data', '0', 'imageUrl']);
        break;
      case 3:
      case -1:
      default:
        const randomInt = Utils.randomIntFromInterval(-1, 4);
        getFilledElement(randomInt);
    }
  }

  const onComponentPress = () => {
    let now = new Date().getTime();
    if (firstPress) {
      firstPress = false;

      time = setTimeout(() => {
        // singleTap();
        console.log(`singleTap`)

        firstPress = true;
        timer = false;
      }, DELAY_TIME);

      lastTime = now;
    } else {
      if (now - lastTime < DELAY_TIME) {
        console.log(`double`)

        timer && clearTimeout(timer);

        getFilledElement(currentShapeType);

        firstPress = true;
      }
    }
  }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        { transform: pan.getTranslateTransform() },
        {
          position: 'absolute',
          top: locationY - (screenWidth * randomSize / 100 / 2),
          left: locationX - (screenWidth * randomSize / 100 / 2),
        }]}
    >
      <TouchableWithoutFeedback onPress={onComponentPress}>
        <View>
          {renderShape()}
        </View>
      </TouchableWithoutFeedback>
    </Animated.View >
  );
}

export default Shapes;