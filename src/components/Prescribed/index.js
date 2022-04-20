import {View, Image, Text, FlatList} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {Colors, Fonts, Images} from '../../assets/Theme';

import Item from './Item';

import styles from './styles';

const data = [
  {id: 1, title: 'Prescription', image: Images.Medical_History},
  {id: 2, title: 'General Medicine', image: Images.tablet},
  {id: 3, title: 'Medical Equipment', image: Images.kit},
  {id: 4, title: 'Medical Equipment', image: Images.Medical_History},
];

const Prescribed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Prescribed</Text>
        <Feather name="more-horizontal" color={'#112950'} size={25} />
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <Item title={item.title} image={item.image} />}
        ItemSeparatorComponent={() => <View style={{width: 7}} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Prescribed;
