/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Image } from 'react-native';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';
import binaImg from '~/assets/images/bino-head.png';

const Tab = createMaterialBottomTabNavigator();

const defaultConfig = {
  header: () => <></>,
  ...TransitionPresets.SlideFromRightIOS,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      barStyle={{ backgroundColor: '#fff' }}
      shifting
    >
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
        name="Bina"
        component={Map}
        options={{
          ...defaultConfig,
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={binaImg}
              style={{
                resizeMode: 'contain',
                height: 50,
                position: 'absolute',
                bottom: -13,
              }}
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
