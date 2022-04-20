import {View, ImageBackground, Text} from 'react-native';
import React from 'react';

import CustomIcon from '../CustomIcon';

import {Images, Fonts, Colors} from '../../assets/Theme';

import styles from './styles';

const Hospital = () => {
  return (
    <View style={styles.hospitalContainer}>
      <View style={styles.hospitalWrapper}>
        <ImageBackground
          source={Images.room}
          imageStyle={{borderRadius: 20}}
          style={styles.imageBackground}>
          <View style={styles.imageInnerWapper}>
            <CustomIcon name="heart" size={24} color={Colors.red} />
          </View>
          <View style={styles.label}>
            <Text style={styles.labelText}>Current Wait time 2hr</Text>
          </View>
        </ImageBackground>
        <View style={styles.info}>
          <View>
            <Text style={styles.headingText}>St Thomas' Hospital</Text>
            <Text style={styles.locationText}>London, United Kingdom</Text>
            <View style={styles.ratingReview}>
              <CustomIcon name="rating" size={15} color={'#F2C94C'} />
              <Text style={styles.reviewText}>4.3 (934 review)</Text>
            </View>
          </View>
          <CustomIcon
            name="call"
            size={25}
            color={'#112950'}
            style={{marginRight: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Hospital;
