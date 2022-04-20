import {View, Text, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';
import styles from './styles';

const Item = () => {
  return (
    <View style={styles.itemCotnainer}>
      <Image source={Images.pharma} style={styles.itemImage} />
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>20% Discount</Text>
      </View>
    </View>
  );
};

export default Item;
