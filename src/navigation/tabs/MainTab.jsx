import * as React from 'react';
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
      />
      <Tab.Screen
        name={SCREEN.circle}
        component={Painter}
        initialParams={{ shapeType: 0 }}
      />
      <Tab.Screen
        name={SCREEN.triangle}
        component={Painter}
        initialParams={{ shapeType: 3 }}
      />
      <Tab.Screen
        name={SCREEN.home}
        component={Painter}
        initialParams={{ shapeType: -1 }}
      />
    </Tab.Navigator>
  );
}

export default mainTab;