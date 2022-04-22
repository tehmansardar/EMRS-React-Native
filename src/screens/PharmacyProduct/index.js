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

import PharmacyList from '../../components/PharmacyList';

const PharmacyProduct = () => {
  return (
    <View style={styles.scrollview}>
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
            <View style={{flexDirection: 'row'}}>
              <CustomIcon
                name="location"
                size={25}
                color={Colors.white}
                style={{marginRight: 25}}
              />
              <CustomIcon name="search" size={25} color={Colors.white} />
            </View>
          </View>
        </View>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Pharmacy</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          // justifyContent: 'center',
          height: 500,
          marginTop: -50,
        }}>
        <PharmacyList />
      </View>
    </View>
  );
};

export default PharmacyProduct;
