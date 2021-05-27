import React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import {activitiesPhotos} from './utils';

export const Activities = () => (
  <View>
    <Text style={styles.title}>Qué hacer en París</Text>
    <ScrollView horizontal>
      {activitiesPhotos.map(photo => (
        <View key={photo}>
          <Image style={styles.city} source={photo} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});
