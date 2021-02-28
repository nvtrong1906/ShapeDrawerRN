import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainTab from './tabs';

const AppNavigator = (props) => {
  return (
    <NavigationContainer {...props}>
      <MainTab />
    </NavigationContainer>
  );
};

export default AppNavigator;
