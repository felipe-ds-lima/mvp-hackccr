/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '~/pages/Map';
import Profile from '~/pages/Profile';

const Tab = createMaterialBottomTabNavigator();

const defaultConfig = {
  header: () => <></>,
  ...TransitionPresets.SlideFromRightIOS,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          ...defaultConfig,
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...defaultConfig,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
