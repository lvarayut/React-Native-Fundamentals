import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';

import Photo from '../components/Photo';

const HomeScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await axios.get(
        'https://picsum.photos/v2/list?limit=50'
      );
      setPhotos(response.data);
    }
    getPhotos();
  }, []);

  function onPress(photo) {
    navigation.navigate('PhotoDetail', { photo });
  }

  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Photo photo={item} onPress={() => onPress(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
