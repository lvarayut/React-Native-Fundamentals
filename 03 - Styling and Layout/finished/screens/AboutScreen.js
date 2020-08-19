import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AboutScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/id/590/200/200' }}
      />
      <View style={styles.textContainer}>
        <Text>
          Mystagram is a social network application that connects people around
          the world by allowing them to share their photos.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas, rerum
          itaque eos, ipsam harum, quod vel omnis dolores at quos sequi quis ut
          deleniti molestiae maxime repudiandae esse dicta! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quos molestias placeat eius at
          est? Nam ab nobis tempore, vel tempora porro impedit illum
          exercitationem, voluptate velit et natus aliquid accusantium. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum
          ipsam suscipit, dolor sint itaque excepturi blanditiis fuga soluta
          accusamus. Quia impedit accusamus dolorem non repellendus corrupti
          velit, quod nulla.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est
          sunt ipsum nam eaque maiores excepturi nisi velit voluptas sit
          recusandae ratione, explicabo odio laborum officia et quisquam
          necessitatibus dolorum!
        </Text>
      </View>
      <View style={styles.social}>
        <FontAwesome style={styles.icon} size={25} name="facebook-square" />
        <FontAwesome style={styles.icon} size={25} name="twitter-square" />
        <FontAwesome style={styles.icon} size={25} name="youtube-square" />
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  textContainer: {
    margin: 15
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    margin: 10
  }
});
