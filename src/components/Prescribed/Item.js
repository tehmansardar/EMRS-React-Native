import {View, Image, Text} from 'react-native';
import React from 'react';

import {Fonts, Images} from '../../assets/Theme';

import styles from './styles';

const Item = props => {
  const {title, image} = props;
  return (
    <View style={styles.itemcontainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
};

export default Item;
