import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {Images} from '../../assets/Theme';
import styles from './styles';

const Item = () => {
  return (
    <View style={styles.itemCotnainer}>
      <View>
        <Image source={Images.tablet} style={styles.itemImage} />
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.labelText}>Lloyd Pharmacy</Text>
        <Text style={styles.time}>Delivery in 2 Hr</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>PayNow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
