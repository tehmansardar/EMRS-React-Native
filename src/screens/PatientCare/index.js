import {View, ScrollView, Image, ImageBackground, Text} from 'react-native';
import React from 'react';

import styles from './styles';

import {Colors, Fonts, Images} from '../../assets/Theme';

import Menus from '../../components/Menus';

import HealthMonitor from '../../components/HealthMonitor';

import MedicalRecords from '../../components/MedicalRecords';

import CustomIcon from '../../components/CustomIcon';

const PatientCare = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <ImageBackground source={Images.background} style={styles.background}>
        <View style={styles.top_nav}>
          <Image source={Images.profile} style={styles.profileImg} />
          {/* <SimpleLineIcons name="location-pin" size={25} color={Colors.white} /> */}
          <CustomIcon name="location" size={25} color={Colors.white} />
        </View>
      </ImageBackground>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Menus />
        <HealthMonitor />
        <MedicalRecords />
      </View>
    </ScrollView>
  );
};

export default PatientCare;
