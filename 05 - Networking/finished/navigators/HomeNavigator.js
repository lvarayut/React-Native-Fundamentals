import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import PhotoDetailScreen from '../screens/PhotoDetailScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="PhotoDetail" component={PhotoDetailScreen} />
    </Navigator>
  );
};

export default HomeNavigator;
