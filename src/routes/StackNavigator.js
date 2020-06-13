import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ header: () => <></> }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
