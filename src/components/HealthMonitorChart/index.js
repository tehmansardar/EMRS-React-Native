import {View, Text} from 'react-native';
import React from 'react';

import Bars from './Bars';

const HealthMonitorChart = () => {
  return (
    <View
      style={{
        width: '45%',
        height: '100%',
        backgroundColor: '#CCC',
        alignItems: 'center',
      }}>
      <Bars />
      <Text>02</Text>
    </View>
  );
};

export default HealthMonitorChart;
