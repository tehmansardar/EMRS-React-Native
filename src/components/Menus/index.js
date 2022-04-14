import {View, Image, Pressable, Text} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import MenuItem from '../MenuItem';

import styles from './styles';

const Menus = () => {
  return (
    <View style={styles.menus}>
      <MenuItem
        src={Images.clinic}
        text={'Hospital'}
        onPress={() => console.warn('items')}
      />
      <MenuItem src={Images.medicine} text={'Pharmacy'} />
      <MenuItem src={Images.Research} text={'Laboratory'} />
      <MenuItem src={Images.Doctor} text={'Consultation'} />
      <MenuItem src={Images.Nurse} text={'Care'} />
      <MenuItem src={Images.more} w={72} h={21} />
    </View>
  );
};

export default Menus;
