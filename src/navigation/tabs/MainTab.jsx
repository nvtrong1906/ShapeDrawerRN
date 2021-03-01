import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SCREEN from '../../consts/screen.const';
import Painter from '../../screens/Painter';

const Tab = createBottomTabNavigator();

const mainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN.rectangle}
        component={Painter}
        initialParams={{ shapeType: 4 }}
        options={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/square.png')} />;
          },
        })}
      />
      <Tab.Screen
        name={SCREEN.circle}
        component={Painter}
        initialParams={{ shapeType: 0 }}
        options={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/circle.jpg')} />;
          },
        })}
      />
      <Tab.Screen
        name={SCREEN.triangle}
        component={Painter}
        initialParams={{ shapeType: 3 }}
        options={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/triangle.png')} />;
          },
        })}
      />
      <Tab.Screen
        name={SCREEN.home}
        component={Painter}
        initialParams={{ shapeType: -1 }}
        options={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/all.png')} />;
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default mainTab;