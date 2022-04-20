import {View, FlatList} from 'react-native';
import React from 'react';

import Hospital from './Hospital';

import styles from './styles';

const Hospitals = () => {
  const data = [
    {
      id: 1,
      title: "St Thomas' Hospital",
      destination: 'London, United Kingdom',
      rating: 4.3,
      review: 943,
      waitTime: 'Current Wait time 2hr',
    },
    {
      id: 2,
      title: "St Thomas' Hospital",
      destination: 'London, United Kingdom',
      rating: 4.3,
      review: 943,
      waitTime: 'Current Wait time 2hr',
    },
    {
      id: 3,
      title: "St Thomas' Hospital",
      destination: 'London, United Kingdom',
      rating: 4.3,
      review: 943,
      waitTime: 'Current Wait time 2hr',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        vartical
        data={data}
        renderItem={({item}) => <Hospital />}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        keyExtractor={item => item.id}
      />
      {/* <Hospital /> */}
    </View>
  );
};

export default Hospitals;
