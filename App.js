/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

// import PatientCare from './src/screens/PatientCare';
// import EmergencyCare from './src/screens/EmergencyCare';
// import Pharmacy from './src/screens/Pharmacy';
// import Laboratory from './src/screens/Laboratory';
// import PharmacyProduct from './src/screens/PharmacyProduct';
// import Booking from './src/screens/Booking';

// import Prescription from './src/screens/Prescription';

import UploadDoc from './src/screens/UploadDoc';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      {/* <PatientCare /> */}
      {/* <EmergencyCare /> */}
      {/* <Pharmacy /> */}
      {/* <Laboratory /> */}
      {/* <PharmacyProduct /> */}
      {/* <Booking /> */}
      {/* <Prescription /> */}
      <UploadDoc />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
});

export default App;
