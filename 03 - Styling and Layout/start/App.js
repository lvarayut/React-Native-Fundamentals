import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from './components/Navbar';
import AboutScreen from './screens/AboutScreen';

export default function App() {
  return (
    <>
      <Navbar />
      <AboutScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
