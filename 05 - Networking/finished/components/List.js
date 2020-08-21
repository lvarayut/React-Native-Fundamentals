import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderColor: '#dbdbdb',
    borderTopWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 15,
    marginHorizontal: 15,
    fontSize: 15
  },
  value: {
    color: '#86868b'
  }
});
