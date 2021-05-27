import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Activities} from './components/Activities';
import {Destination} from './components/Destination';
import {Header} from './components/Header';
import {Hotels} from './components/Hotels';

const App = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <Activities />
          <Destination />
          <Hotels />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default App;
