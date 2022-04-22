import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';
import styles from './styles';

const Item = () => {
  return (
    <View style={styles.itemCotnainer}>
      <Text style={styles.labelText}>The Doctors Laboratory Ltd</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>BookNow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
