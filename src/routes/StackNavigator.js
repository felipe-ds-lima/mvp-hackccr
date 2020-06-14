import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Slide1 from '~/pages/Slide1';
import Slide2 from '~/pages/Slide2';
import Slide3 from '~/pages/Slide3';
import Slide4 from '~/pages/Slide4';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const defaultConfig = {
  header: () => <></>,
  ...TransitionPresets.SlideFromRightIOS,
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Default">
      <Stack.Screen options={defaultConfig} name="SignIn" component={SignIn} />
      <Stack.Screen options={defaultConfig} name="SignUp" component={SignUp} />

      <Stack.Screen options={defaultConfig} name="Slide1" component={Slide1} />
      <Stack.Screen options={defaultConfig} name="Slide2" component={Slide2} />
      <Stack.Screen options={defaultConfig} name="Slide3" component={Slide3} />
      <Stack.Screen options={defaultConfig} name="Slide4" component={Slide4} />

      <Stack.Screen
        options={defaultConfig}
        name="Default"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
