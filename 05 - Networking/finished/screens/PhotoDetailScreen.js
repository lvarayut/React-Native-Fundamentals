import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import List from '../components/List';

const PhotoDetailScreen = ({ route }) => {
  const { photo } = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: photo.download_url }} />
      <List title="Id" value={photo.id} />
      <List title="Author" value={photo.author} />
      <List title="Width" value={photo.width} />
      <List title="Height" value={photo.height} />
      <List title="URL" value={photo.url} />
    </View>
  );
};

export default PhotoDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  }
});
