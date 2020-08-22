import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';

import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',

    flexDirection: 'row',
    justifyContent: 'center',

    paddingVertical: 10
  },
  logo: {
    width: 120,
    height: 50,

    resizeMode: 'contain'
  }
});
