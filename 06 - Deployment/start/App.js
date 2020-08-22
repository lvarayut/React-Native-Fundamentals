import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Navbar from './components/Navbar';
import AboutScreen from './screens/AboutScreen';
import HomeNavigator from './navigators/HomeNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
};

export default function App() {
  return (
    <>
      <Navbar />
      <NavigationContainer theme={theme}>
        <Navigator>
          <Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="home" size={size} color={color} />
              )
            }}
          />
          <Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="person" size={size} color={color} />
              )
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
