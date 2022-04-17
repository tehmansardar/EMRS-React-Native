import {View, Text} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {Colors, Fonts} from '../../assets/Theme';

import styles from './styles';

import HealthMonitorChart from '../HealthMonitorChart';

const HealthMonitor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>HealthMonitor</Text>
        <Feather
          name="filter"
          size={25}
          color={'#006FDB'}
          onPress={() => {
            console.warn('Filter');
          }}
        />
      </View>
      <View style={styles.chartContainer}>
        {/* <HealthMonitorChart /> */}
        {/* <HealthMonitorChart /> */}
      </View>
    </View>
  );
};

export default HealthMonitor;
