import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import styles from './styles';

import CustomIcon from '../../components/CustomIcon';

import Hospitals from '../../components/Hospitals';

const Booking = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <ImageBackground source={Images.background} style={styles.background}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Delivery Address</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 35,
          height: 450,
        }}>
        {/* Patient Name */}
        <View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            underlineColorAndroid="transparent"
            placeholder="Enter Username"
            placeholderTextColor={'#969696'}
            selectionColor={Colors.primary}
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            underlineColorAndroid="transparent"
            placeholder="Mobile Number"
            placeholderTextColor={'#969696'}
            selectionColor={Colors.primary}
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            underlineColorAndroid="transparent"
            placeholder="Patients Address"
            placeholderTextColor={'#969696'}
            selectionColor={Colors.primary}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: Fonts.RobotoMedium,
              fontSize: 14,
              color: Colors.white,
            }}>
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Booking;
