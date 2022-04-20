import {View, FlatList} from 'react-native';
import React from 'react';

import Item from './Item';

import styles from './styles';

const data = [{id: 1}, {id: 2}, {id: 3}];

const Pharmacies = () => {
  return (
    <View style={styles.container}>
      <FlatList
        vartical
        data={data}
        renderItem={({item}) => <Item />}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Pharmacies;
