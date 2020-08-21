import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Photo = ({ photo, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: photo.download_url }} />
      <View style={styles.description}>
        <View style={styles.author}>
          <MaterialIcons name="person-pin" size={15} />
          <Text style={styles.authorName}>{photo.author}</Text>
        </View>
        <Text style={styles.size}>
          Width: {photo.width}px, Height: {photo.height}px
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    overflow: 'hidden',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dbdbdb'
  },
  image: {
    width: '100%',
    height: 200
  },
  description: {
    margin: 10
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  authorName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 2
  },
  size: {
    fontSize: 10,
    color: '#8e8e8e',
    marginTop: 5
  }
});
