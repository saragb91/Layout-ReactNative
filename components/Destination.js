import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {destinationPhotos} from './utils';

export const Destination = () => (
  <View>
    <Text style={styles.title}>Los mejores alojamientos</Text>
    <View>
      {destinationPhotos.map(photo => (
        <View key={photo}>
          <Image style={styles.destination} source={photo} />
        </View>
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  destination: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
});
