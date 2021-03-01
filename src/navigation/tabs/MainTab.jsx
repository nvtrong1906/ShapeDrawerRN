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
        screenOptions={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/square.png')} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={SCREEN.circle}
        component={Painter}
        initialParams={{ shapeType: 0 }}
        screenOptions={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/circle.jpg')} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={SCREEN.triangle}
        component={Painter}
        initialParams={{ shapeType: 3 }}
        screenOptions={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/triangle.png')} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={SCREEN.home}
        component={Painter}
        initialParams={{ shapeType: -1 }}
        screenOptions={() => ({
          tabBarIcon: () => {
            return <Image style={{ height: 20, width: 20 }} source={require('../../assets/images/all.png')} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  );
}

export default mainTab;