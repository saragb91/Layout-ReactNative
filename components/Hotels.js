import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {hotelPhotos} from './utils';

export const Hotels = () => (
  <View>
    <Text style={styles.title}>Hospedaje en los Ángeles</Text>
    <View style={styles.list}>
      {Object.values(hotelPhotos).map(hotel => (
        <View key={hotel.title} style={styles.listItem}>
          <Image style={styles.hotel} source={hotel.photo} />
          <Text>{hotel.title}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  hotel: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '49%',
  },
});
