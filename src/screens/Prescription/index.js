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

import Feather from 'react-native-vector-icons/Feather';

const Prescription = () => {
  return (
    <View style={styles.scrollview}>
      <View style={styles.background}>
        <ImageBackground
          source={Images.background}
          imageStyle={{height: '150%', resizeMode: 'cover'}}>
          <View style={styles.backgroundInner}>
            <View style={styles.top_nav}>
              <View style={styles.top_navInner}>
                <TouchableOpacity>
                  <CustomIcon
                    name="left-arrow"
                    size={18}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mainTitleUpperContainer}>
            <View style={styles.mainTitleContainer}>
              <Text style={styles.mainTitle}>Upload Your Prescription</Text>
            </View>
            <Text style={styles.desc}>
              Upload your prescription which you recive from your doctor to buy
              medicine at your dore step / nearest medical store
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bodySection}>
        <View style={{width: '100%'}}>
          <TouchableOpacity style={styles.uploadBtn}>
            <View style={styles.uploadBtnInner}>
              <Feather name="upload" size={25} color={Colors.primary} />
              <Text style={styles.uploadBtnText}>Take Picture</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uploadBtn}>
            <View style={styles.uploadBtnInner}>
              <Feather name="image" size={25} color={Colors.primary} />
              <Text style={styles.uploadBtnText}>Gallery</Text>
            </View>
          </TouchableOpacity>
          {/* Captured List */}
          <View style={styles.capList}>
            <View style={styles.capListInner}>
              <Feather name="check-circle" size={25} color={'#666666'} />
              <Text style={styles.capListText}>image101.jpg</Text>
              <Feather name="trash" size={25} color={'#666666'} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>Upload Prescription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Prescription;
