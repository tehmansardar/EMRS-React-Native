import {View, Text, FlatList} from 'react-native';
import React from 'react';

import styles from './styles';

import Items from './Items';

import {Images} from '../../assets/Theme';

const list = [
  {
    id: 1,
    name: 'Prescription',
    img: Images.General,
  },
  {
    id: 2,
    name: 'Lab Reports',
    img: Images.Stehoscope,
  },
  {
    id: 3,
    name: 'Allergies',
    img: Images.Scan,
  },
  {
    id: 4,
    name: 'Women Care',
    img: Images.injury,
  },
];

const MedicalRecords = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Medical Records</Text>
      <FlatList
        horizontal
        data={list}
        renderItem={({item}) => <Items name={item.name} img={item.img} />}
        ItemSeparatorComponent={() => <View style={{width: 7}} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MedicalRecords;
