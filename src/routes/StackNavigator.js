import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

const defaultConfig = {
  header: () => <></>,
  ...TransitionPresets.SlideFromRightIOS,
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen options={defaultConfig} name="SignIn" component={SignIn} />
      <Stack.Screen options={defaultConfig} name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
