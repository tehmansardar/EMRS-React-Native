import {Pressable, Image, Text} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import styles from './styles';

const MenuItem = props => {
  const {src, text, w, h} = props;

  const menuStyles = [styles.image, w && {width: w}, h && {height: h}];
  return (
    <Pressable style={styles.container}>
      <Image source={src} style={menuStyles} />
      {text && <Text style={styles.texture}>{text}</Text>}
    </Pressable>
  );
};

export default MenuItem;
