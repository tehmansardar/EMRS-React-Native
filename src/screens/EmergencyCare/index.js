import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import styles from './styles';

import CustomIcon from '../../components/CustomIcon';

import Hospitals from '../../components/Hospitals';

import Boarding from '../../components/Boarding';

const EmergencyCare = () => {
  const slides = [
    {id: '1', image: Images.unsplash},
    {id: '2', image: Images.unsplash},
    {id: '3', image: Images.unsplash},
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <ImageBackground source={Images.background} style={styles.background}>
        <View style={styles.backgroundInner}>
          <View style={styles.top_nav}>
            <View style={styles.top_navInner}>
              <TouchableOpacity>
                <CustomIcon name="left-arrow" size={18} color={Colors.white} />
              </TouchableOpacity>
              <View style={styles.locationContainer}>
                <Text style={styles.locationLabel}>your location</Text>
                <Text style={styles.currentLocationText}>
                  User Current location Address
                </Text>
              </View>
            </View>
            <CustomIcon name="location" size={25} color={Colors.white} />
          </View>
        </View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Emergency Care</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Boarding slides={slides} />
        </View>
      </ImageBackground>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Hospitals slides={slides} />
      </View>
    </ScrollView>
  );
};

export default EmergencyCare;
