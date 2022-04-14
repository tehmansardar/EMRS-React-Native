/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import Fonts from './src/assets/Theme/Fonts';
import Colorss from './src/assets/Theme/Colors';

import PatientCare from './src/screens/PatientCare';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PatientCare />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default App;
