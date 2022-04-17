import {Pressable, Image, Text} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import styles from './styles';

const Items = props => {
  const {name, img} = props;

  return (
    <Pressable style={styles.ItemContainer}>
      <Image source={img} style={styles.img} />
      <Text style={styles.itemText}>{name}</Text>
    </Pressable>
  );
};

export default Items;
