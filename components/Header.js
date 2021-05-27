import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export const Header = () => (
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.banner} source={require('../img/bg.jpg')} />
  </View>
);
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
});
