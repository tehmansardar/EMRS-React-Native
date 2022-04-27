import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Colors, Fonts} from '../../assets/Theme';

const styles = StyleSheet.create({
  scrollview: {flex: 1, height: '100%'},
  background: {
    width: '100%',
    height: '30%',
  },
  backgroundInner: {alignItems: 'center'},
  top_nav: {
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  top_navInner: {flexDirection: 'row', alignItems: 'center'},
  locationContainer: {marginLeft: 15},
  locationLabel: {
    color: '#BDBDBD',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 14,
  },
  currentLocationText: {
    color: '#F2F2F2',
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 14,
  },
  mainTitleUpperContainer: {marginLeft: 10, marginTop: 30},
  mainTitleContainer: {width: 200},
  mainTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 24,
    color: Colors.white,
  },
  desc: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 10,
    letterSpacing: 0.075,
    marginTop: 10,
    color: Colors.white,
  },

  bodySection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  uploadBtn: {
    width: '100%',
    height: 61,
    backgroundColor: '#F5F7FB',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    marginBottom: 30,
  },
  uploadBtnInner: {flexDirection: 'row', justifyContent: 'space-around'},
  uploadBtnText: {
    color: Colors.primary,
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
    marginLeft: 20,
  },
  capList: {width: '100%', marginTop: 40},
  capListInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  capListText: {color: '#666666', fontFamily: Fonts.PoppinsSemiBold},

  bottomBtn: {
    width: '100%',
    height: 61,
    backgroundColor: '#0139B9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtnText: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
  },
});

export default styles;
