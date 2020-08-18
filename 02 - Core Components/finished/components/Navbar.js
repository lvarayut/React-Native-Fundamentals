import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';

import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <SafeAreaView>
      <Image source={logo} />
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
